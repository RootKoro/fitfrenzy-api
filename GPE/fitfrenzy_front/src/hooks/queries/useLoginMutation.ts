
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios';
import { Alert } from 'react-native';
import { login, userProfile } from '../../api/auth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { saveToken } from '../../helpers/authToken';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/authSlice';
import { JwtPayload, jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import { useRegisterMutation } from './useRegisterMutation';
import { useEffect, useState } from 'react';
import { setToken } from '../../api';

export const useLoginMutation = () => {
    const dispatch = useDispatch<any>();
    
    const queryClient = useQueryClient();
    
    /* const sd = useQuery({
      queryKey: ['userProfile'],
      queryFn: userProfile,
    }); */
    
    return useMutation({
      mutationFn: login,
      onSuccess: async (res) => {
        const token = res?.access_token;
        if(token) {
          const decodedToken = jwtDecode<JwtPayload & { email: string }>(token);
          saveToken(token);
          dispatch(authActions.setUserInfo({email: decodedToken.email, _id: decodedToken.sub}));
          dispatch(authActions.setToken(token));
          setToken(token);
          console.log("Login Successfully")
          await queryClient.invalidateQueries(['userProfile'])
          /* await getUserProfile();
          console.log("data",data, isSuccess); */

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


 