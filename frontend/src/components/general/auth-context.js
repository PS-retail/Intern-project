import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  username: null,
  password: null,   
  login: () => {},
  logout: () => {}
});