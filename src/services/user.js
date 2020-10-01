export const USER_KEY = '@admin-user';

export const getUser = () => localStorage.getItem(USER_KEY);

export const setUser = (user) => localStorage.setItem(USER_KEY, user);
