export const TOKEN_KEY = '@admin-token';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
