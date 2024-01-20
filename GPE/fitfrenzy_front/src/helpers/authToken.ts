import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_TOKEN_NAME = 'authToken';

export const saveToken = async (token: string) => {
    try {
        await AsyncStorage.setItem(AUTH_TOKEN_NAME, token);
    }catch (error) {
        console.error("Error saving access token: ", error);
    }
}

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem(AUTH_TOKEN_NAME);
        return token;
    } catch (error) {
        console.error("Error getting access token: ", error);
        return;
    }
}

export const removeToken = async () => {
    try {
        await AsyncStorage.removeItem(AUTH_TOKEN_NAME);
    } catch (error) {
        console.error("Error removing access token: ", error);
    }
}