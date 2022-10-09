import { createContext, ReactNode } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
};

type ChildrenProp = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ChildrenProp) {
  const isAuthenticated = false;

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
}
