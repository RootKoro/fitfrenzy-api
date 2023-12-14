import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { userProfile } from '../../api/auth';


const useUserProfile = () => {
  const token = useSelector((state: any) => state.auth.token);
  const userId = useSelector((state: any) => state.auth.userInfo.id);
  console.log("yyyyyy")
  console.log(token)
  console.log(userId)
  return useQuery(['userProfile', userId], () => userProfile(userId, token), {
    onSuccess: (fetchedData) => {
        console.log('User profile fetched successfully:', fetchedData);
    }
  });
};

export default useUserProfile;