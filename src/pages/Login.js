/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import AuthContext from '../contexts/Auth';
import AlertError from '../components/AlertError';

const Login = () => {
  const [username, setUsername] = useState('');
  const { signIn, signinError, setSigninError } = useContext(AuthContext);

  const handleSignin = () => {
    signIn(username);
  };
  return (
    <>
      <h1 className="h3 mt-3 mb-3 font-weight-normal">
        Type a username to authenticate
      </h1>
      <label htmlFor="inputEmail" className="sr-only">
        Username
      </label>
      <input
        type="text"
        id="inputEmail"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="form-control"
        placeholder="Username"
        required
      />
      <AlertError
        message="Can't connect to server!!!"
        visible={signinError}
        onDismiss={() => setSigninError(false)}
      />

      <button
        onClick={handleSignin}
        className="btn btn-lg btn-primary btn-block mt-3"
        type="button"
      >
        Sign in
      </button>
    </>
  );
};

export default Login;
