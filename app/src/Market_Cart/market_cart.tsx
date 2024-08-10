import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Image, FlatList, Pressable, LogBox } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { useIsFocused } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StackTypes } from '@/app/StackNavigation';
import config from "../../../api/config/config";
import Styles from './styles';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import axios from 'axios';
import {  getEmail } from '@/Session';
import { productData } from './productData';
import * as Notifications from 'expo-notifications';

LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

export default function Market_Cart() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const [load, setLoad] = React.useState(false);
  const isFocused = useIsFocused(); 
  const [produto_db, setProduto] = useState<Products[]>([]);
  const styles = Styles(height, width);

  interface Products {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    type: number;
  }

  const scale = useSharedValue(1);


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${config.urlRootRoute}/produtos/FindAll`);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    }

    fetchProducts();
  }, [load,isFocused]);

  const handleMarket = async () => {
    navigation.navigate('MainTabs', { screen: 'Market' });
  };

  const getImageSource = (type: number) => {
    const product = productData.find((item) => item.type === type);
    return product ? product.image : require('../../assets/Account.png');
  };

  async function handleCompra(nome: string, valor: number, quant: number) {
    try {
      setLoad(true); 
  
      const savedEmail = await getEmail();
      const response = await axios.get(`${config.urlRootRoute}/usuarios/Saldo`, {
        params: { email: savedEmail },
      });
  
      const saldoNum = parseInt(response.data.saldo);
      let novoSaldo = saldoNum - valor;
  
      await axios.put(`${config.urlRootRoute}/usuarios/UpdateSaldo`, {
        email: savedEmail,
        saldo: novoSaldo,
      });
  
      let novaQuantidade = quant - 1;
      await axios.put(`${config.urlRootRoute}/produtos/UpdateQuantidade`, {
        nome: nome,
        quantidade: novaQuantidade,
      });
  
      
      await Notifications.scheduleNotificationAsync({
        content: {
          title: `Compra Confirmada 🎉`,
          body: `Você comprou ${nome} por ${valor}. Saldo restante: ${novoSaldo}.`,
        },
        trigger: null, 
      });
  
    } catch (error) {
      console.error('Erro ao processar a compra:', error);
    } finally {
      setLoad(false); 
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ width: '100%', height: '100%' }}>
        <View style={styles.shoppingCoins_view}>
          <View style={styles.top_view}>
            <Animated.View style={animatedStyle}>
              <Pressable
                onPress={handleMarket}
                onPressIn={() => {
                  scale.value = withSpring(0.85);
                }}
                onPressOut={() => {
                  scale.value = withSpring(1);
                }}
              >
                <View style={styles.leave_view}>
                  <Ionicons name="exit" size={32} color="white" />
                  <Text style={styles.leave_text}>Voltar</Text>
                </View>
              </Pressable>
            </Animated.View>
          </View>

          <View style={styles.market_view}>
            <View style={styles.title_view}>
              <Text style={styles.title_text}>Shop</Text>
            </View>

            <FlatList
              data={produto_db}
              renderItem={({ item }) => (
                <View style={styles.product_card_view}>
                  <View style={styles.product_img_view}>
                    <Image
                      source={getImageSource(item.type)}
                      style={{ width: width * 0.4, height: height * 0.14 }}
                    />
                  </View>

                  <View style={styles.product_description_view}>
                    <View style={styles.product_description_name_view}>
                      <Text style={styles.product_name_text}>{item.nome}</Text>
                      <Text style={styles.product_quant_text}>{item.quantidade} unidades</Text>
                    </View>

                    <View style={styles.product_description_lc_view}>
                      <View style={styles.product_inner_lc_view}>
                        <Text style={styles.product_lc_text}>Lc</Text>
                        <Text style={styles.product_lc_bold_text}>{item.preco.toFixed(2)}</Text>
                      </View>

                      <View style={styles.product_inner_button_view}>
                        <Button
                          loading={load}
                          disabled={load}
                          icon={{
                            name: 'shopping-cart',
                            type: 'font-awesome',
                            size: 22,
                            color: 'white',
                          }}
                          buttonStyle={{
                            backgroundColor: '#7B22D3',
                            borderRadius: 10,
                            height: 35,
                            width: 35,
                            paddingHorizontal: 0,
                            paddingVertical: 0,
                          }}
                          containerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() => handleCompra(item.nome, item.preco, item.quantidade)}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              contentContainerStyle={styles.products_view}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<View style={{ height: height * 0.2 }} />}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
