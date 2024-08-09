import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Pressable, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import { StackTypes } from '@/app/StackNavigation';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './styles';

export default function Login() {
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


  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
    setIcon(icon === 'eye' ? 'eye-off' : 'eye');
  };

  const handleSignUp = async () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ width: '100%', height: '100%' }}>
        <View style={styles.shoppingCoins_view}>
          <View style={styles.image_view}>
            <Image source={require('../../assets/ShoppingCoins.png')} style={styles.shopping_img} />
          </View>


          <View style={styles.login_view}>
            <View style={styles.forms_view}>

              <Text style={styles.Login_text}>Login</Text>

              <TextInput
                label="Email"
                mode="outlined"
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'email'} color={'#7B22D3'} />}
                style={styles.form_input}
              />
              <TextInput
                mode="outlined"
                label="Senha*"
                placeholder="Senha*"
                secureTextEntry={secureText}
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'lock'} color={'#7B22D3'} />}
                right={<TextInput.Icon icon={() => <MaterialCommunityIcons color={"#7B22D3"} name={icon} size={20} onPress={togglePasswordVisibility} />} />}
                style={styles.form_input}
              />


              <Button
                title="Entrar"
                onPress={handleSignUp}
                buttonStyle={{
                  backgroundColor: '#7B22D3',
                  borderWidth: 2,
                  borderColor: '#7B22D3',
                  borderRadius: 30,
                  height: height * 0.063
                }}
                containerStyle={{
                  width: width * 0.3,
                  marginVertical: 10,
                }}
                titleStyle={{ fontSize: 18, color: 'white' }}
              />


              <View style={styles.links_view}>
                <Animated.View style={animatedStyle}>
                  <Pressable
                    onPressIn={() => {
                      scale.value = withSpring(0.85);
                    }}
                    onPressOut={() => {
                      scale.value = withSpring(1);
                    }}
                  >
                    <Text style={styles.links_text}>Registrar-se</Text>
                  </Pressable>
                </Animated.View>

                <Text style={styles.links_text}> | </Text>

                <Animated.View style={animatedStyle2}>
                  <Pressable
                    onPressIn={() => {
                      scale2.value = withSpring(0.85);
                    }}
                    onPressOut={() => {
                      scale2.value = withSpring(1);
                    }}
                  >
                    <Text style={styles.links_text}>Resetar senha </Text>
                  </Pressable>
                </Animated.View>

              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
