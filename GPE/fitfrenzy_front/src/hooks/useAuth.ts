import { useQuery, useMutation, useQueryClient, UseMutationOptions } from "@tanstack/react-query";
import { getToken, saveToken } from "../helpers/authToken";

type LoginCredentials = {
    email: string;
    password: string;
};

const loginUser = async (credentials: LoginCredentials): Promise<string> => {
    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    const data = await response.json();
    const accessToken = data.access_token;
    saveToken(accessToken);
    return accessToken;
}

const useAuth = () => {
    const queryClient = useQueryClient()

    const token = getToken()

    if(token) {
        queryClient.setDefaultOptions({
            queries: {
                suspense: false,
            }
        });
    }

    const loginMutation = useMutation<string, Error, LoginCredentials>(loginUser, {
        onSuccess: (token) => {
             // Save the token to local storage when successfully logged in
            saveToken(token);

            // Invalidate and refetch relevant queries
            //queryClient.invalidateQueries(['userData']);
        }
    });

    const login = async (credentials: LoginCredentials) => {
        await loginMutation.mutateAsync(credentials);
    }

    const { data: userData } = useQuery('userData', {
        queryFn: () => fetch('your_user_data_endpoint', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => response.json()),
        enabled: !!token, // Only fetch if there is a token
    });

    return {
        login,
        isLoading: loginMutation.isLoading,
        isError: loginMutation.isError,
        error: loginMutation.error
    }
}


export default useAuth;