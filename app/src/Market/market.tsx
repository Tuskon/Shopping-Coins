import React, { useState, useEffect } from 'react';
import { View, Text,Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Image, FlatList, ListRenderItem, Pressable, LogBox, ToastAndroid } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { StackTypes } from '@/app/StackNavigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused } from "@react-navigation/native";
import config from "../../../api/config/config"
import { productData } from './productData';
import Styles from './styles';
import axios from 'axios';
import { getUserData,getEmail, addPurchaseToHistory } from '@/Session';
import * as Notifications from 'expo-notifications';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function Market() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const [nome, setNome] = useState('');
  const [load, setLoad] = React.useState(false);
  const [saldo, setSaldo] = useState('');
  const [produto_db, setProduto] = useState<Products[]>([]);
  const styles = Styles(height, width);
  const isFocused = useIsFocused();



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const savedEmail = await getEmail();
        if (!savedEmail) return;

        const userData = await getUserData(savedEmail);
        if (userData) {
          setNome(userData.firstName);

          try {
            const response = await axios.get(`${config.urlRootRoute}/usuarios/Saldo`, {
              params: { email: savedEmail }
            });

            if (response.data && response.data.saldo) {
              const formattedSaldo = new Intl.NumberFormat('pt-BR', { style: 'decimal', minimumFractionDigits: 0 }).format(response.data.saldo);
              setSaldo(formattedSaldo);
            }
          } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
          }
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    if (isFocused) {
      fetchUserData();
    }
  }, [isFocused]);

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
  }, [saldo, isFocused]);

  const handleMarket_Cart = async () => {
    navigation.navigate('MainTabs', { screen: 'Market_Cart' });
  };

  const getImageSource = (type: number) => {
    const product = productData.find((item) => item.type === type);
    return product ? product.image : require('../../assets/Account.png');
  };

  async function handleCompra(nome: string, valor: number, quant: number) {
    try {
      const savedEmail = await getEmail();
      if (savedEmail === null) {
        throw new Error('Email não encontrado');
      }
  
      const response = await axios.get(`${config.urlRootRoute}/usuarios/Saldo`, {
        params: { email: savedEmail }
      });
  
      const saldoNum = parseInt(response.data.saldo);
  
      let novoSaldo = saldoNum - valor;
  
      await axios.put(`${config.urlRootRoute}/usuarios/UpdateSaldo`, {
        email: savedEmail,
        saldo: novoSaldo,
      });
  
      const formattedSaldo = new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 0,
      }).format(novoSaldo);
      setSaldo(formattedSaldo);
  
      let novaQuantidade = quant - 1;
      await axios.put(`${config.urlRootRoute}/produtos/UpdateQuantidade`, {
        nome: nome,
        quantidade: novaQuantidade,
      });
  
  
      await addPurchaseToHistory(savedEmail, nome, valor);
  
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Compra Confirmada 🎉',
          body: `Você comprou ${nome} por ${valor}. Saldo restante: ${novoSaldo}.`,
        },
        trigger: null,
      });
  
    } catch (error) {
      console.error('Erro ao processar a compra:', error);
    }
  }


  interface TripItem {
    id: number;
    image: any;
    title: string;
    local: string;
    way: string;
    points: string;
  }

  interface Products {

    id: number
    nome: string;
    preco: number;
    quantidade: number;
    type: number;

  }

  const tripData = [
    {
      id: 1,
      image: require('../../assets/Beach.png'),
      title: 'Pacote',
      local: 'Acapulco',
      way: 'Guerrero ~ México',
      points: '50.000'
    },
    {
      id: 2,
      image: require('../../assets/Beach.png'),
      title: 'Pacote',
      local: 'Amazonia',
      way: 'Manaus ~ Brasil',
      points: '30.000'
    },
    {
      id: 3,
      image: require('../../assets/Beach.png'),
      title: 'Pacote',
      local: 'Croissant',
      way: 'Paris ~ França',
      points: '150.000'

    },
  ];


  const renderTripItem: ListRenderItem<TripItem> = ({ item }) => (
    <View style={styles.trip_card_view}>
      <View style={styles.trip_card_img_view}>
        <Image source={item.image} style={styles.trip_img} />
      </View>
      <View style={styles.trip_card_package_view}>
        <Text style={styles.trip_top_text}>{item.title} <Text style={styles.trip_top_bold_text}>{item.local}</Text></Text>
        <Text style={styles.trip_middle_text}>{item.way}</Text>
        <Text style={styles.trip_middle_text}>Lc <Text style={styles.trip_bottom_text}>{item.points}</Text></Text>
      </View>
    </View>

  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ width: '100%', height: '100%' }}>
        <View style={styles.shoppingCoins_view}>
          <View style={styles.top_view}>
            <View style={styles.top_components_right_view}>
              <Image source={require('../../assets/Account.png')} style={styles.account_img} />
              <Text style={styles.top_text}>Olá, <Text style={styles.top_text_bold}>{nome}</Text></Text>
            </View>
            <View style={styles.top_components_left_view}>
              <Button
                title="Shopping Coins"
                onPress={()=>ToastAndroid.show('Aguarde a próxima versão', ToastAndroid.SHORT)}
                buttonStyle={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  borderColor: 'black',
                  borderRadius: 30,
                  height: 40
                }}
                containerStyle={{
                  width: 142,
                  marginVertical: 10,
                }}
                titleStyle={{ fontSize: 14, color: 'white' }}
              />
              <Pressable onPress={()=>ToastAndroid.show('Aguarde a próxima versão', ToastAndroid.SHORT)}>
              <Ionicons name="notifications-sharp" size={29} color="white" />
              </Pressable>
            </View>
          </View>

          <View style={styles.market_view}>
            <View style={styles.lc_view}>
              <View style={styles.lc_points_view}>
                <Ionicons name="wallet-outline" size={32} color="#7B22D3" />
                <Text style={styles.lc_text}>Lc <Text style={styles.lc_bold_text}>{saldo}</Text></Text>
              </View>
              <View style={styles.lc_shop_view}>
                <Pressable style={styles.shop_button} onPress={handleMarket_Cart}>
                  <Ionicons name="bag-handle-sharp" size={32} color="#7B22D3" />
                  <Text style={styles.lc_text}> Shop</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.trip_view}>
              <FlatList
                data={tripData}
                renderItem={renderTripItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <View style={styles.products_view}>

              {produto_db.slice(0, 2).map((product) => (
                <View key={product.id} style={styles.product_card_view}>
                  <View style={styles.product_img_view}>
                    <Image
                      source={getImageSource(product.type)}
                      style={{ width: width * 0.4, height: height * 0.14 }}
                    />
                  </View>

                  <View style={styles.product_description_view}>
                    <View style={styles.product_description_name_view}>
                      <Text style={styles.product_name_text}>{product.nome}</Text>
                      <Text style={styles.product_quant_text}>{product.quantidade} unidades</Text>
                    </View>

                    <View style={styles.product_description_lc_view}>
                      <View style={styles.product_inner_lc_view}>
                        <Text style={styles.product_lc_text}>Lc</Text>
                        <Text style={styles.product_lc_bold_text}>{product.preco.toFixed(2)}</Text>
                      </View>

                      <View style={styles.product_inner_button_view}>
                        <Button
                          loading={load}
                          disabled={load}
                          onPress={() => handleCompra(product.nome, product.preco, product.quantidade)}
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
                        />
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.bottom_view}>
              <Button
                title="Ver todos os produtos"
                onPress={handleMarket_Cart}
                buttonStyle={{
                  backgroundColor: '#7B22D3',
                  borderWidth: 2,
                  borderColor: '#7B22D3',
                  borderRadius: 30,
                  height: 50
                }}
                containerStyle={{
                  width: 250,
                  marginVertical: 10,
                }}
                titleStyle={{ fontSize: 20, color: 'white' }}
              />
            </View>

          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
