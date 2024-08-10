import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Image, Pressable, LogBox, Modal, ToastAndroid  } from 'react-native';
import { useNavigation, CommonActions } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { StackTypes } from '@/app/StackNavigation';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';
import Styles from './styles';
import {  getUserData, getEmail, removeEmail } from '@/Session';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function Settings() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const [nome, setNome] = useState('');
  const [nomeC, setNomeC] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [load, setLoad] = React.useState(false);
  const styles = Styles(height, width);
  const scale = useSharedValue(1);
  const scale2 = useSharedValue(1);
  const scale3 = useSharedValue(1);

  useEffect(() => {
    const fetchUserData = async () => {
      let savedEmail = await getEmail();
      if (!savedEmail) {
        return;
      }

      const userData = await getUserData(savedEmail);
      if (userData) {
        setNome(userData.firstName);
        setNomeC(userData.name);
        setEmail(savedEmail);
        setSenha(userData.password);
      } else {
        
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
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
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    transform: [{ scale: scale2.value }],
  }));

  const animatedStyle3 = useAnimatedStyle(() => ({
    transform: [{ scale: scale3.value }],
  }));

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  async function handleName() {
    navigation.navigate('Change_Name');
    setModalVisible3(!modalVisible3)
  }

  async function handlePassword() {
    navigation.navigate('Change_Password');
    setModalVisible3(!modalVisible3)
  }

  

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ width: '100%', height: '100%' }}>
        <View style={styles.shoppingCoins_view}>
          <View style={styles.top_view}>
            <Image source={require('../../assets/Account.png')} style={{ width: 96, height: 96 }} />
            <Text style={styles.name_text}>{nome}</Text>
            <Button
             onPress={() => setModalVisible3(true)}
              title="Editar Perfil"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'black',
                borderRadius: 30,
                height: height * 0.063
              }}
              containerStyle={{
                width: width * 0.4,
                marginVertical: 10,
              }}
              titleStyle={{ fontSize: 18, color: 'white' }}
            />
          </View>

          <View style={styles.settings_view}>
            <View style={styles.options_view}>
              <Animated.View style={animatedStyle}>
                <Pressable
                  onPress={() => setModalVisible(true)}
                  onPressIn={() => {
                    scale.value = withSpring(0.85);
                  }}
                  onPressOut={() => {
                    scale.value = withSpring(1);
                  }}
                >
                  <View style={styles.button_view}>
                    <View style={styles.button_info_view}>
                      <Ionicons name="person-circle-outline" size={36} color="#7B22D3" />
                      <Text style={styles.button_info_text}> Detalhes do Perfil</Text>
                    </View>
                    <View>
                      <Ionicons name="chevron-forward-outline" size={32} color="gray" />
                    </View>
                  </View>
                </Pressable>
              </Animated.View>

              <Animated.View style={animatedStyle2}>
                <Pressable
                  onPress={() => setModalVisible2(true)}
                  onPressIn={() => {
                    scale2.value = withSpring(0.85);
                  }}
                  onPressOut={() => {
                    scale2.value = withSpring(1);
                  }}
                >
                  <View style={styles.button_view}>
                    <View style={styles.button_info_view}>
                      <Ionicons name="at-outline" size={36} color="#7B22D3" />
                      <Text style={styles.button_info_text}> Detalhes da Conta</Text>
                    </View>
                    <View>
                      <Ionicons name="chevron-forward-outline" size={32} color="gray" />
                    </View>
                  </View>
                </Pressable>
              </Animated.View>

              <Animated.View style={animatedStyle3}>
                <Pressable
                  onPress={()=>ToastAndroid.show('Aguarde a próxima versão', ToastAndroid.SHORT)}
                  onPressIn={() => {
                    scale3.value = withSpring(0.85);
                  }}
                  onPressOut={() => {
                    scale3.value = withSpring(1);
                  }}
                >
                  <View style={styles.button_view}>
                    <View style={styles.button_info_view}>
                      <Ionicons name="file-tray-stacked-sharp" size={34} color="#7B22D3" />
                      <Text style={styles.button_info_text}> Histórico</Text>
                    </View>
                    <View>
                      <Ionicons name="chevron-forward-outline" size={32} color="gray" />
                    </View>
                  </View>
                </Pressable>
              </Animated.View>
            </View>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.center_view}>
                <View style={styles.modal_view}>
                  <Text style={styles.modal_text}>Nome: {nomeC}</Text>
                  <Text style={styles.modal_text}>Primeiro Nome: {nome}</Text>
                  <Pressable
                    style={[styles.modal_button, styles.modal_button_close]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.modal_text_style}>Fechar</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible2}
              onRequestClose={() => {
                setModalVisible2(!modalVisible2);
              }}
            >
              <View style={styles.center_view}>
                <View style={styles.modal_view}>
                  <Text style={styles.modal_text}>Email: {email}</Text>
                  <Text style={styles.modal_text}>Senha: {senha}</Text>
                  <Pressable
                    style={[styles.modal_button, styles.modal_button_close]}
                    onPress={() => setModalVisible2(!modalVisible2)}
                  >
                    <Text style={styles.modal_text_style}>Fechar</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>


            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible3}
              onRequestClose={() => {
                setModalVisible3(!modalVisible3);
              }}
            >
              <View style={styles.center_view}>
                <View style={styles.modal_view}>
                <Pressable
                    style={[styles.modal_button, styles.modal_changeNameC_button]}
                    onPress={handleName}
                  >
                    <Text style={styles.modal_text_style}>Alterar Nome</Text>
                  </Pressable>
                <Pressable
                    style={[[styles.modal_button, styles.modal_changeNameC_button]]}
                    onPress={handlePassword}
                  >
                    <Text style={styles.modal_text_style}>Alterar Senha</Text>
                  </Pressable>
                  
                  <Pressable
                    style={[styles.modal_button, styles.modal_button_close]}
                    onPress={() => setModalVisible3(!modalVisible3)}
                  >
                    <Text style={styles.modal_text_style}>Fechar</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <View style={styles.bottom_view}>
              <Button
                title="Sair"
                onPress={handleLogout}
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
                  width: width * 0.24,
                  marginVertical: 10,
                }}
                titleStyle={{ fontSize: 18, color: 'white' }}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
