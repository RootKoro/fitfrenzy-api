
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios';
import { Alert } from 'react-native';
import { register } from '../../api/auth';
import { useMutation } from '@tanstack/react-query';
import { saveToken } from '../../helpers/authToken';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux/authSlice';


export const useRegisterMutation = () => {
    const dispatch = useDispatch<any>();
  
    return useMutation(register, {
      onSuccess(res) {
        console.log("Register Successfully")
      },
      onError(err) {
        const {data}: any = (err as AxiosError).response;
        console.log('Login error: ', data);
      },
    });
  };

