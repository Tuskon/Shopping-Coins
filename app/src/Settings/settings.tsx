import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import { StackTypes } from '@/app/StackNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Settings() {
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
    top_view: {
      width: '100%',
      height: height * 0.33,
      alignItems: 'center',
      marginTop: height * 0.01,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    settings_view: {
      position: 'absolute',
      backgroundColor: '#F9F9F9',
      alignItems: 'center',
      borderRadius: 20,
      justifyContent: 'flex-start',
      marginTop: height * 0.35,
      height: height,
      width: '100%',

    },
    options_view: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
      width: '100%',
      flexDirection: 'column',
      height: height * 0.45,
    },
    button_view: {
      backgroundColor: '#F9F9F9',
      alignItems: 'center',
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: height * 0.11,
      width: width * 0.9,
      shadowColor: '#000',
      shadowOffset: { width: 3, height: 6 },
      shadowOpacity: 0.6,
      shadowRadius: 1,
      elevation: 5,

    },
    button_info_view: {
      flexDirection: 'row',
      alignItems: 'center',
      width: width * 0.66
    },
    bottom_view:{
      marginTop:15
    },
    name_text: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold'
    },
    button_info_text: {
      fontSize: 18,
      color: 'black',
      fontWeight: '600'
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ width: '100%', height: '100%' }}>
        <View style={styles.shoppingCoins_view}>

          <View style={styles.top_view}>

            <Image source={require('../../assets/Account.png')} style={{ width: 96, height: 96 }}></Image>

            <Text style={styles.name_text}>Mary</Text>

            <Button
              title="Editar Perfil"
              onPress={handleSignUp}
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

              <View style={styles.button_view}>

                <View style={styles.button_info_view}>
                  <Ionicons name="person-circle-outline" size={36} color="#7B22D3" />
                  <Text style={styles.button_info_text}> Detalhes do Perfil</Text>
                </View>

                <View>
                  <Ionicons name="chevron-forward-outline" size={32} color="gray" />
                </View>

              </View>

              <View style={styles.button_view}>

                <View style={styles.button_info_view}>
                  <Ionicons name="at-outline" size={36} color="#7B22D3" />
                  <Text style={styles.button_info_text}> Detalhes da Conta</Text>
                </View>

                <View>
                  <Ionicons name="chevron-forward-outline" size={32} color="gray" />
                </View>

              </View>

              <View style={styles.button_view}>

                <View style={styles.button_info_view}>
                  <Ionicons name="file-tray-stacked-sharp" size={34} color="#7B22D3" />
                  <Text style={styles.button_info_text}> Histórico</Text>
                </View>

                <View>
                  <Ionicons name="chevron-forward-outline" size={32} color="gray" />
                </View>

              </View>


            </View>


            <View style={styles.bottom_view}>
              <Button

                title="Sair"
                onPress={handleSignUp}
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
