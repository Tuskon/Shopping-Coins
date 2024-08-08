import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import { StackTypes } from '@/app/StackNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const [secureText, setSecureText] = React.useState(true);
  const [icon, setIcon] = React.useState('eye');

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
    setIcon(icon === 'eye' ? 'eye-off' : 'eye');
  };

  const handleSignUp = async () => {
    navigation.navigate('SignUp');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    shoppingCoins_view: {
      backgroundColor: '#7B22D3',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: height,
      width: '100%'
    },
    image_view: {
      width: '100%',
      height: height * 0.4,
      alignItems: 'center',
      marginTop: height * 0.04
    },
    login_view: {
      position: 'absolute',
      backgroundColor: '#F9F9F9',
      alignItems: 'center',
      borderRadius: 20,
      justifyContent: 'flex-start',
      marginTop: height * 0.31,
      height: height,
      width: '100%',

    },
    forms_view: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      flexDirection: 'column',
      height: height * 0.5,
      marginTop: height * 0.02
    },
    input_view: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      height: height * 0.15,
      width: width * 0.9,

    },
    links_view: {
      marginTop: height * 0.04,
      flexDirection: 'row',
      justifyContent: 'space-evenly'

    },
    Login_text: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#313131'
    },
    input_text: {
      backgroundColor: '#E8E8E8',
      width: width * 0.9,
      height: 45,
      borderRadius: 5,
      borderWidth: 0.5
    },
    links_text: {
      color: '#9B9B9B',
      fontSize: 15

    },
    form_input: {
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 9,
      width: width * 0.9, 
      height: height * 0.08, 
      backgroundColor: 'white', 
      marginBottom: 15 
    },
    shopping_img: {
      width: width * 0.8,
      height: height * 0.20
    }
  });

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
                <Text style={styles.links_text}>Registrar-se </Text>
                <Text style={styles.links_text}>|</Text>
                <Text style={styles.links_text}> Resetar senha</Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
