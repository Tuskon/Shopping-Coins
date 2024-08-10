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

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function Change_Name() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const [load, setLoad] = React.useState(false);
  const [nome, setNome] = useState('');
  const [primeiro_nome, setPrimeiro_nome] = useState('');



  const styles = Styles(height, width);

  const scale = useSharedValue(1);


  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleSettings = async () => {
    navigation.navigate('MainTabs', { screen: 'Settings' });
  };

  async function handleName() {
    const savedEmail = await getEmail();
    setLoad(true);

    if (!nome || !primeiro_nome) {
      ToastAndroid.show('Preencha todos os campos', ToastAndroid.SHORT);
      setLoad(false);
    } else {
      try {
        await axios.put(`${config.urlRootRoute}/usuarios/UpdateName`, {
          email: savedEmail,
          nome: nome,
          primeiro_nome: primeiro_nome,
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

          <View style={styles.name_view}>
            <ScrollView contentContainerStyle={styles.scrollview_container}>
              <View style={styles.elements_view}>
                <Text style={styles.title_text}>Altere seu Nome</Text>
                <View style={styles.form_view}>
                  <TextInput
                    label="Nome"
                    mode="outlined"
                    onChangeText={(text) => setNome(text)}
                    outlineColor='white'
                    activeOutlineColor='#7B22D3'
                    left={<TextInput.Icon icon={'account'} color={'#7B22D3'} />}
                    style={styles.form_input}
                  />
                  <TextInput
                    label="Primeiro nome"
                    mode="outlined"
                    onChangeText={(text) => setPrimeiro_nome(text)}
                    outlineColor='white'
                    activeOutlineColor='#7B22D3'
                    left={<TextInput.Icon icon={'account'} color={'#7B22D3'} />}
                    style={styles.form_input}
                  />

                </View>

                <Button
                  title="Alterar"
                  loading={load}
                  disabled={load}
                  onPress={handleName}
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
