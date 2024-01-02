import axios from 'axios'
import { LoginResponse, RegistrationResponse, UserCredentials, UserData } from '../types/auth';
import { useSelector } from 'react-redux';
import api from '.'

export const login = async (userCredentials: UserCredentials) : Promise<LoginResponse | null> => {
      const res = await api(3000).post<LoginResponse>(`/auth/login`, userCredentials);
      return res.data;
};

export const register = async (userData: UserData): Promise<RegistrationResponse | null> => {
      const res = await api(3000).post<RegistrationResponse>(`/users/signup`, userData);
      return res.data;
}



export const userProfile = async (): Promise<UserData | null> => {
      //axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
      const res = await api(3000).get<UserData>(`/auth/profile`);
      return res.data;
}
