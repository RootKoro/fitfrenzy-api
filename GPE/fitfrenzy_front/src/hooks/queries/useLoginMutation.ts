
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios';
import { Alert } from 'react-native';
import { login } from '../../api/auth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { saveToken } from '../../helpers/authToken';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/authSlice';
import { JwtPayload, jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import useUserProfile from './useUserQuery';

export const useLoginMutation = () => {
    const dispatch = useDispatch<any>();
    const { refetch: getUserProfile, data } = useUserProfile();
    const queryClient = useQueryClient();
    
    return useMutation({
      mutationFn: login,
      onSuccess: (res) => {
        const token = res?.access_token;
        if(token) {
          const decodedToken = jwtDecode<JwtPayload & { email: string }>(token);
          saveToken(token);
          console.log(decodedToken);
          dispatch(authActions.setUserInfo({email: decodedToken.email, id: decodedToken.sub}));
          dispatch(authActions.setToken(token));
          console.log("Login Successfully")
          console.log("@@@@")
          console.log(data);
          
          getUserProfile();
          console.log(data);

        }
        /* AsyncStorage.setItem('token', token);
        setToken(token); */
        //dispatch(me());
     
      },
      onError(err) {
        const {data}: any = (err as AxiosError).response;
  
        console.log('Login error: ', data);
        //Alert.alert('Error in login');
      },
    });
  };


 