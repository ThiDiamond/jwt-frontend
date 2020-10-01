import api from './api';
import { getToken, setToken, TOKEN_KEY } from './token';
import { setUser } from './user';

export const login = async (username) => {
  try {
    const response = await api.get('/login', {
      username,
    });
    setToken(response.data.token);
    setUser(username);
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const authenticate = async () => {
  try {
    const token = getToken();

    if (!token) throw Error('No token provided');

    await api.get('private/authenticate');
  } catch (error) {
    throw Error('No token provided');
  }
};
