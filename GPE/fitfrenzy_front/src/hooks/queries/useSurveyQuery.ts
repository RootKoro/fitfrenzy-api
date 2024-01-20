import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { answerSurvey, fetchSurvey, updateUser } from '../../api/survey';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { authActions } from '../../redux/authSlice';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileScreenNavigationProp, RootStackPramList } from '../../navigation/Navigation';


export const useSurveyQuery = () => {
  const dispatch = useDispatch<any>();
  
  return useQuery({
    queryKey: ['getSurvey'],
    queryFn: fetchSurvey,
    onSuccess: (fetchedUser) => {
      //console.log('User profile fetched successfully:', fetchedUser);

    },
    onError: (error) => {
      console.log('User profile fetched failed:', error);
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  
  const { userInfo } = useSelector((state: any) => state.auth);
  return useMutation({
    mutationFn: () => updateUser(userInfo._id),
    onSuccess: async (user) => {
      
      await queryClient.invalidateQueries(['userProfile']);
    },
    onError: (err) => {
      console.log("rrrrr");
    }
  })
}

export const useSurveyAnswerQuery = () => {
  const dispatch = useDispatch<any>();
  const  navigation = useNavigation<ProfileScreenNavigationProp>();
  const queryClient = useQueryClient();
  const { mutate } = useUpdateUser();

  return useMutation({
    mutationFn: answerSurvey,
    onSuccess: async (res) => {
      mutate();
      await queryClient.invalidateQueries(['userProfile']);
      navigation.navigate('Home');
      /* navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            { name: 'Home' }
          ],
        })
      ); */
    },
    onError: (err) => {
      
    }
  });
}
