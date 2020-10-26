import React, { useState, createContext, useEffect } from 'react';
import Cookie from 'js-cookie';

import auth, { LoginResponse } from '../services/auth';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn: Function;
  signOut: Function;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider(props: any) {

  const { children } = props;
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    function loadCookieData() {
      const storedUser = Cookie.get('user');
      const storedToken = Cookie.get('token');

      if (storedUser && storedToken) {
        api.defaults.headers.Authorization = `Bearer ${storedToken}`;

        setUser(JSON.parse(storedUser));
      }
    }

    loadCookieData();
  }, []);

  async function signIn(email: string, password: string) {
    const login = {
      email: email,
      password: password,
    };

    let response: LoginResponse | any;
    try {
      response = await auth(login);
    } catch (error) {
      alert('Credenciais incorretas');
      return;
    }

    const { user, token } = response.data;

    setUser(user);

    Cookie.set('user', JSON.stringify(user));
    Cookie.set('token', token);
  }

  function signOut() {
    Cookie.remove('user');
    Cookie.remove('token');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: user, signIn: signIn, signOut: signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;