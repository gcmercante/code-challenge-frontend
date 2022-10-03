import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { api } from "../api";
import { ProviderProps } from "../shared/interfaces/ProviderProps";

interface AuthContextType {
  authToken: string,
  handleSignIn: (data: SignInDataType) => Promise<void>;
  handleSignUp: (data: SignUpDataType) => Promise<void>;
  handleSignOut: () => void;
}

interface SignInDataType {
  email: string,
  password: string
}

interface SignUpDataType {
  email: string,
  password: string
  name: string
}

interface ResponseError {
  response: {
    data: {
      message: string;
    }
  }
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: ProviderProps) {
  const [authToken, setAuthToken] = useState(() => {
    const storedToken = sessionStorage.getItem('@code-challenge:auth-token-1.0.0');

    if(storedToken) {
      const { token } = JSON.parse(storedToken);

      return token;
    }

    return '';
  });

  useEffect(() => {
    sessionStorage.setItem('@code-challenge:auth-token-1.0.0', JSON.stringify({ token: authToken }));
  }, [authToken])

  async function handleSignIn(signInData: SignInDataType) {
    try {
      const { data } = await api.post('/user/signin', signInData);

      setAuthToken(data.authToken);
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }

  async function handleSignOut() {
    sessionStorage.setItem('@code-challenge:auth-token-1.0.0', JSON.stringify({ token: '' }));

    setAuthToken('');
  }

  async function handleSignUp(signUpData: SignUpDataType) {
    try {
      await api.post('/user', signUpData);
      toast.success('Account created!');

      handleSignIn({ ...signUpData });
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authToken,
        handleSignIn,
        handleSignOut,
        handleSignUp
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}