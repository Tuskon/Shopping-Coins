import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform, Image, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { TextInput } from 'react-native-paper';
import { StackTypes } from '@/app/StackNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Styles from './styles';

export default function SignUp() {
  const { height, width } = Dimensions.get('window');
  const navigation = useNavigation<StackTypes>();
  const [secureText, setSecureText] = useState(true);
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

  const handleMarket = () => {
    navigation.navigate('MainTabs', { screen: 'Market' });
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
                mode="outlined"
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'account'} color={'#7B22D3'} />}
                style={styles.form_input}
              />
              <TextInput
                label="Primeiro Nome"
                mode="outlined"
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'account'} color={'#7B22D3'} />}
                style={styles.form_input}
              />
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
                label="Confirmar Senha*"
                placeholder="Senha*"
                secureTextEntry={secureText}
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'lock'} color={'#7B22D3'} />}
                right={<TextInput.Icon icon={() => <MaterialCommunityIcons color={"#7B22D3"} name={icon} size={20} onPress={()=>togglePasswordVisibility(1)} />} />}
                style={styles.form_input}
              />
              <TextInput
                mode="outlined"
                label="Senha*"
                placeholder="Senha*"
                secureTextEntry={secureText2}
                outlineColor='white'
                activeOutlineColor='#7B22D3'
                left={<TextInput.Icon icon={'lock'} color={'#7B22D3'} />}
                right={<TextInput.Icon icon={() => <MaterialCommunityIcons color={"#7B22D3"} name={icon2} size={20} onPress={()=>togglePasswordVisibility(2)} />} />}
                style={styles.form_input}
              />

              <Button
                title="Cadastrar"
                onPress={handleMarket}
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
