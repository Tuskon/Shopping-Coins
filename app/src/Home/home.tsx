import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
import { StackTypes } from '@/app/StackNavigation';

export default function Home() {

    const { height, width } = Dimensions.get('window');
    const navigation = useNavigation<StackTypes>();


    const handleLogin = async () => {

        navigation.navigate('Login')

    };

    const handleSingUp = async () => {

        navigation.navigate('SignUp')

    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#46A24B'
        },
        top_view: {
            alignItems: 'center',
            flex: 1,
            width: width
        },
        bottom_view: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            width: width
        },
        store_view: {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: height*0.45,
            alignItems: 'center'
        },
        store_image: {
            width: 325,
            height: 325,
        },
        store_text: {
            fontSize: 50,
            color: 'white'
        }
    });

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.top_view}>
                <View style={styles.store_view}>
                    <Image source={require('../../assets/store.png')} style={styles.store_image}></Image>
                    <Text style={styles.store_text}>The Store</Text>
                </View>
            </View>


            <View style={styles.bottom_view}>
                <View>

                    <Button
                        onPress={handleLogin}
                        title="LOG IN"
                        buttonStyle={{
                            backgroundColor: 'white',
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 30,
                            height: height * 0.07
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ fontSize: 15, color: '#5DB075' }}
                    />

                    <Button
                        onPress={handleSingUp}
                        title="Sign Up"
                        buttonStyle={{
                            backgroundColor: 'white',
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 30,
                            height: height * 0.07
                        }}
                        containerStyle={{
                            width: 200,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ fontSize: 16, color: '#5DB075' }}
                    />

                </View>
            </View>
        </SafeAreaView>
    );
}
