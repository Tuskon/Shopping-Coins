import React, { useState } from 'react';
import { View, Text, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Image, ScrollView, ToastAndroid, LogBox } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import { StackTypes } from '@/app/StackNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './styles';
import axios from 'axios';
import config from "../../../api/config/config"
import { saveUserData, saveEmail } from '@/Session';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function SignUp() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const [secureText, setSecureText] = useState(true);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [load, setLoad] = React.useState(false);
  const [primeiro_nome, setPrimeiro_nome] = useState('');
  const [senha, setSenha] = useState('');
  const [senhac, setCSenha] = useState('');
  const [icon, setIcon] = useState('eye');
  const [secureText2, setSecureText2] = useState(true);
  const styles = Styles(height, width);
  const [icon2, setIcon2] = useState('eye');

  const togglePasswordVisibility = (num: number) => {
    if (num === 1) {
      setSecureText(!secureText);
      setIcon(icon === 'eye' ? 'eye-off' : 'eye');
    } else if (num === 2) {
      setSecureText2(!secureText2);
      setIcon2(icon2 === 'eye' ? 'eye-off' : 'eye');
    }
  };

  const handleSignUp = async () => {
    setLoad(true);

    if (!email || !senha || !nome || !primeiro_nome || !senhac) {
      ToastAndroid.show('Preencha todos os campos', ToastAndroid.SHORT);
      setLoad(false);
    } else if (senha !== senhac) {
      ToastAndroid.show('Senhas diferentes', ToastAndroid.SHORT);
      setLoad(false);
    } else {
      try {
        const response = await axios.post(`${config.urlRootRoute}/usuarios/Register`, {
          nome: nome,
          primeiro_nome: primeiro_nome,
          saldo: 5000000.00,
          senha: senha,
          email: email
        });

        await saveEmail(email);
        const userData = {
          name: nome,
          firstName: primeiro_nome,
          balance: 5000000.00,
          password: senha,
        };
        await saveUserData(email, userData);
        setLoad(false);
        navigation.navigate('MainTabs', { screen: 'Market' });
      } catch (error) {
        ToastAndroid.show('Ocorreu um erro', ToastAndroid.SHORT);
        console.error('Erro ao fazer a requisição:', error);
        setLoad(false);
      }
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.shoppingCoins_view}>
            <View style={styles.image_view}>
              <Image source={require('../../assets/ShoppingCoins.png')} style={styles.shopping_img} />
            </View>
            <View style={styles.forms_view}>
              <Text style={styles.Login_text}>Sign Up</Text>

              <TextInput
                label="Nome"
                onChangeText={(text) => setNome(text)}
                mode="outlined"
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'account'} color={'#7B22D3'} />}
                style={styles.form_input}
              />
              <TextInput
                label="Primeiro Nome"
                onChangeText={(text) => setPrimeiro_nome(text)}
                mode="outlined"
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'account'} color={'#7B22D3'} />}
                style={styles.form_input}
              />
              <TextInput
                label="Email"
                onChangeText={(text) => setEmail(text)}
                mode="outlined"
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'email'} color={'#7B22D3'} />}
                style={styles.form_input}
              />
              <TextInput
                mode="outlined"
                onChangeText={(text) => setSenha(text)}
                label="Senha*"
                placeholder="Senha*"
                secureTextEntry={secureText}
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'lock'} color={'#7B22D3'} />}
                right={<TextInput.Icon icon={() => <MaterialCommunityIcons color={"#7B22D3"} name={icon} size={20} onPress={() => togglePasswordVisibility(1)} />} />}
                style={styles.form_input}
              />
              <TextInput
                mode="outlined"
                onChangeText={(text) => setCSenha(text)}
                label="Confirmar Senha*"
                placeholder="Senha*"
                secureTextEntry={secureText2}
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'lock'} color={'#7B22D3'} />}
                right={<TextInput.Icon icon={() => <MaterialCommunityIcons color={"#7B22D3"} name={icon2} size={20} onPress={() => togglePasswordVisibility(2)} />} />}
                style={styles.form_input}
              />

              <Button
                title="Cadastrar"
                onPress={handleSignUp}
                loading={load}
                disabled={load}
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
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
