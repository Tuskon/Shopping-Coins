import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Image, FlatList, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StackTypes } from '@/app/StackNavigation';
import { productData } from './productData';
import Styles from './styles';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function Market_Cart() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const styles = Styles(height, width);

  const scale = useSharedValue(1);
  const scale2 = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ scale: scale2.value }],
  }));


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ width: '100%', height: '100%' }}>
        <View style={styles.shoppingCoins_view}>
          <View style={styles.top_view}>
            <Animated.View style={animatedStyle}>
              <Pressable
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
              data={productData}
              renderItem={({ item }) => (
                <View style={styles.product_card_view}>
                  <View style={styles.product_img_view}>
                    <Image
                      source={item.image}
                      style={{ width: width * 0.4, height: height * 0.14 }}
                    />
                  </View>

                  <View style={styles.product_description_view}>
                    <View style={styles.product_description_name_view}>
                      <Text style={styles.product_name_text}>{item.name}</Text>
                      <Text style={styles.product_quant_text}>{item.quant} unidades</Text>
                    </View>

                    <View style={styles.product_description_lc_view}>
                      <View style={styles.product_inner_lc_view}>
                        <Text style={styles.product_lc_text}>Lc</Text>
                        <Text style={styles.product_lc_bold_text}>{item.lc.toFixed(2)}</Text>
                      </View>

                      <View style={styles.product_inner_button_view}>
                        <Button
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
