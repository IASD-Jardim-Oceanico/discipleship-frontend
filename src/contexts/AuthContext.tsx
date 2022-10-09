import Router from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { UserInfo } from '../interfaces';
import { LoginDiscipleMaker } from '../schemas/loginDiscipleMaker';
import { loginRequest, recoverUserInfo } from '../services/auth';
import { decodedUserId } from '../utils/jwt';

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserInfo | null;
  login: (payload: LoginDiscipleMaker) => Promise<void>;
};

type ChildrenProp = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ChildrenProp) {
  const [user, setUser] = useState<UserInfo | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();
    if (token) {
      const userId = decodedUserId(token);
      recoverUserInfo(userId).then((data) => {
        console.log(data)
        setUser(data.userInfo);
      }).catch((err) => {
        console.error(err)
      });
    }
  }, []);

  async function login(payload: LoginDiscipleMaker) {
    const { token, userInfo } = await loginRequest(payload);

    const ONE_DAY = 60 * 60 * 24 * 1;

    setCookie(undefined, 'nextauth.token', token as unknown as string, { maxAge: ONE_DAY });

    setUser(userInfo);

    Router.push('/dashboard');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login }}>{children}</AuthContext.Provider>
  );
}
