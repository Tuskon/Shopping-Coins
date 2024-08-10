import * as React from 'react';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { StackNavigation } from './StackNavigation';

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState<string | null>(null);

  useEffect(() => {
   
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });

  
    const registerForPushNotificationsAsync = async () => {
      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }

        if (finalStatus !== 'granted') {
          Alert.alert('Falha', 'Falha ao obter permissões para notificações.');
          return;
        }

        const token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log('Token de notificação:', token);
        setExpoPushToken(token);
      } else {
        Alert.alert('Notificações', 'Notificações não estão disponíveis em emuladores.');
      }
    };

   
    registerForPushNotificationsAsync();

  
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificação recebida:', notification);
    });

 
    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Resposta à notificação:', response);
    });


    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return <StackNavigation />;
}
