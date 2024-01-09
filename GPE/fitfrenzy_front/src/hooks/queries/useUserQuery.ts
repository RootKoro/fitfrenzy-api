import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../api/auth';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { authActions } from '../../redux/authSlice';


export const useUserProfile = () => {
  const dispatch = useDispatch<any>();
  
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: userProfile,
    enabled: true,
    cacheTime: 0,
    onSuccess: (fetchedUser) => {
      //console.log('User profile fetched successfully:', fetchedUser);
      dispatch(authActions.setUserInfo(fetchedUser));
    },
    onError: (error) => {
      console.log('User profile fetched failed:', error);
    },
  });
};
