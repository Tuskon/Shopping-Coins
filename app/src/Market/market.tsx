import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Image, FlatList, ListRenderItem, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import { StackTypes } from '@/app/StackNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { productData } from './productData';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Styles from './styles';

export default function Market() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const [secureText, setSecureText] = React.useState(true);
  const [icon, setIcon] = React.useState('eye');
  const styles = Styles(height, width);
  const scale = useSharedValue(1);
  const scale2 = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ scale: scale2.value }],
  }));

  const handleMarket_Cart = async () => {
    navigation.navigate('MainTabs', { screen: 'Market_Cart' });
  };

  interface TripItem {
    id: number;
    image: any;
    title: string;
    local: string;
    way: string;
    points: string;
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

  type ItemProps = { title: string };

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
              <Text style={styles.top_text}>Olá, <Text style={styles.top_text_bold}>Mary</Text></Text>
            </View>
            <View style={styles.top_components_left_view}>
              <Button
                title="Shopping Coins"
                
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
              <Ionicons name="notifications-sharp" size={29} color="white" />
            </View>
          </View>

          <View style={styles.market_view}>
            <View style={styles.lc_view}>
              <View style={styles.lc_points_view}>
                <Ionicons name="wallet-outline" size={32} color="#7B22D3" />
                <Text style={styles.lc_text}>Lc <Text style={styles.lc_bold_text}>5.000.000</Text></Text>
              </View>
              <View style={styles.lc_shop_view}>
                <Ionicons name="bag-handle-sharp" size={32} color="#7B22D3" />
                <Text style={styles.lc_text}> Shop</Text>
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

              {productData.map((product) => (
                <View key={product.id} style={styles.product_card_view}>
                  <View style={styles.product_img_view}>
                    <Image
                      source={product.image}
                      style={{ width: width * 0.4, height: height * 0.14 }}
                    />
                  </View>

                  <View style={styles.product_description_view}>

                    <View style={styles.product_description_name_view}>
                      <Text style={styles.product_name_text}>{product.name}</Text>
                      <Text style={styles.product_quant_text}>{product.quant} unidades</Text>
                    </View>

                    <View style={styles.product_description_lc_view}>

                      <View style={styles.product_inner_lc_view}>
                        <Text style={styles.product_lc_text}>Lc</Text>
                        <Text style={styles.product_lc_bold_text}>{product.lc.toFixed(2)}</Text>
                      </View>

                      <View style={styles.product_inner_button_view}>
                        <Button
                          icon={{
                            name: 'shopping-cart',
                            type: 'font-awesome',
                            size: 22,
                            color: 'white',
                          }}
                           // Certifique-se de que handleSignUp está definido
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
