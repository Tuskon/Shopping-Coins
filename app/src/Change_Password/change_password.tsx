import React, { useState } from 'react';
import { View, Text, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Pressable, LogBox, ToastAndroid } from 'react-native';
import { useNavigation, CommonActions } from "@react-navigation/native";
import { TextInput } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StackTypes } from '@/app/StackNavigation';
import config from "../../../api/config/config";
import Styles from './styles';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import axios from 'axios';
import { Button } from '@rneui/themed';
import { getEmail, removeEmail } from '@/Session';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function Change_Password() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const [secureText, setSecureText] = React.useState(true);
  const [secureText2, setSecureText2] = React.useState(true);
  const [senha, setSenha] = useState('');
  const [load, setLoad] = React.useState(false);
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [icon, setIcon] = React.useState('eye');
  const [icon2, setIcon2] = React.useState('eye');


  const styles = Styles(height, width);

  const scale = useSharedValue(1);

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
    setIcon(icon === 'eye' ? 'eye-off' : 'eye');
  };

  const togglePasswordVisibility2 = () => {
    setSecureText2(!secureText2);
    setIcon2(icon2 === 'eye' ? 'eye-off' : 'eye');
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleSettings = async () => {
    navigation.navigate('MainTabs', { screen: 'Settings' });
  };

  async function handlePassword() {
    const savedEmail = await getEmail();
    setLoad(true);

    if (!senha || !confirmarSenha) {
      ToastAndroid.show('Preencha todos os campos', ToastAndroid.SHORT);
      setLoad(false);
    } else if (confirmarSenha !== senha) {
      ToastAndroid.show('Senhas diferentes', ToastAndroid.SHORT);
      setLoad(false);
    } else {
      try {
        await axios.put(`${config.urlRootRoute}/usuarios/UpdateSenha`, {
          email: savedEmail,
          senha: senha,
        });

        await removeEmail();

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        );
      } catch (error) {
        console.error('Erro ao fazer logout:', error);
      } finally {
        setLoad(false);
      }

    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ width: '100%', height: '100%' }}>
        <View style={styles.shoppingCoins_view}>
          <View style={styles.top_view}>
            <Animated.View style={animatedStyle}>
              <Pressable
                onPress={handleSettings}
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

          <View style={styles.password_view}>
            <ScrollView contentContainerStyle={styles.scrollview_container}>
              <View style={styles.elements_view}>
                <Text style={styles.title_text}>Altere sua senha</Text>
                <View style={styles.form_view}>
                  <TextInput
                    mode="outlined"
                    label="Senha*"
                    onChangeText={(text) => setSenha(text)}
                    placeholder="Senha"
                    secureTextEntry={secureText}
                    outlineColor='white'
                    activeOutlineColor='#7B22D3'
                    left={<TextInput.Icon icon={'lock'} color={'#7B22D3'} />}
                    right={<TextInput.Icon icon={() => <MaterialCommunityIcons color={"#7B22D3"} name={icon} size={20} onPress={togglePasswordVisibility} />} />}
                    style={styles.form_input}
                  />
                  <TextInput
                    mode="outlined"
                    label="Confirmar Senha*"
                    onChangeText={(text) => setConfirmarSenha(text)}
                    placeholder="Confirmar Senha*"
                    secureTextEntry={secureText2}
                    outlineColor='white'
                    activeOutlineColor='#7B22D3'
                    left={<TextInput.Icon icon={'lock'} color={'#7B22D3'} />}
                    right={<TextInput.Icon icon={() => <MaterialCommunityIcons color={"#7B22D3"} name={icon2} size={20} onPress={togglePasswordVisibility2} />} />}
                    style={styles.form_input}
                  />

                </View>

                <Button
                  title="Alterar"
                  loading={load}
                  disabled={load}
                  onPress={handlePassword}
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

            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
