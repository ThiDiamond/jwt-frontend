import React, { useContext } from 'react';
import LockIcon from './components/LockIcon';
import AuthContext from './contexts/Auth';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  const { isLogged } = useContext(AuthContext);
  const Page = isLogged ? Home : Login;
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded text-center">
      <form className="form-signin">
        <LockIcon isOpened={isLogged} />
        <Page />
      </form>
    </div>
  );
};

export default App;
