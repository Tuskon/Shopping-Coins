import AsyncStorage from '@react-native-async-storage/async-storage';




export const saveEmail = async (email: string) => {
    try {
      await AsyncStorage.setItem('user_email', email);
     
    } catch (error) {
      
    }
  };
  
  export const getEmail = async () => {
    try {
      const email = await AsyncStorage.getItem('user_email');
     
      return email;
    } catch (error) {
     
      return null;
    }
  };

  export const removeEmail = async () => {
    try {
        await AsyncStorage.removeItem('user_email');
       
    } catch (error) {
        
    }
};

export const saveUserData = async (email: string, userData: { name: string; firstName: string; balance: number; password: string }) => {
  
  try {
    const key = `user_${email}`;
    await AsyncStorage.setItem(key, JSON.stringify(userData));
    
   
  } catch (error) {
    
  }
};

export const getUserData = async (email: string) => {
  try {
    const key = `user_${email}`;
    const jsonData = await AsyncStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : null;
  } catch (error) {
    console.error('Erro ao recuperar os dados do usuário:', error);
    return null;
  }
};

export const removeUserData = async (email: string) => {
  try {
    const key = `user_${email}`;
    await AsyncStorage.removeItem(key);
    
  } catch (error) {
    console.error('Erro ao Remover usuário:', error);
  }
};

// Defina a interface para o histórico de compras
interface Purchase {
  nome: string;
  data: string;
  valor: number;
}

export const addPurchaseToHistory = async (email: string, nome: string, valor: number) => {
  try {
    const purchase: Purchase = {
      nome,
      data: new Date().toISOString(),
      valor,
    };

    let purchaseHistory: Purchase[] = [];
    const storedHistory = await AsyncStorage.getItem(email);

    if (storedHistory) {
      purchaseHistory = JSON.parse(storedHistory);
    }

    // Verifica se purchaseHistory é um array
    if (!Array.isArray(purchaseHistory)) {
      throw new Error('Histórico de compras inválido.');
    }

    purchaseHistory.push(purchase);

    await AsyncStorage.setItem(email, JSON.stringify(purchaseHistory));

  } catch (error) {
    console.error('Erro ao salvar histórico de compras:', error);
  }
};


