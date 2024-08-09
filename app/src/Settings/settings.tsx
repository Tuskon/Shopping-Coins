import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import { StackTypes } from '@/app/StackNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Styles from './styles';

export default function Settings() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const [secureText, setSecureText] = React.useState(true);
  const [icon, setIcon] = React.useState('eye');
  const styles = Styles(height, width);

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
