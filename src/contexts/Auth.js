import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { authenticate, login, logout } from '../services/auth';
import { getUser } from '../services/user';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signinError, setSigninError] = useState(false);

  const isLogged = !!user;

  const signIn = async (username) => {
    try {
      if (username) {
        await login(username);
        setUser(username);
      }
    } catch (error) {
      setUser(null);
      setSigninError(true);
    }
  };

  const signOut = async () => {
    logout();
    setUser(null);
  };

  useEffect(() => {
    const auth = async () => {
      try {
        await authenticate();
        const username = getUser();
        setUser(username);
      } catch (error) {
        setUser(null);
      }
    };
    auth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLogged,
        signIn,
        signinError,
        setSigninError,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthContext;
