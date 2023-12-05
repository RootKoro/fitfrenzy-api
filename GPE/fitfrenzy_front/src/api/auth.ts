import axios from 'axios'
import { LoginResponse, RegistrationResponse, UserCredentials, UserData } from '../types/auth';
import { useSelector } from 'react-redux';
const BASE_URL = 'http://localhost:3000';

export const login = async (userCredentials: UserCredentials) : Promise<LoginResponse | null> => {
      const res = await axios.post<LoginResponse>(`${BASE_URL}/auth/login`, userCredentials);
      return res.data;
};
