import React, { useContext } from 'react';
import AuthContext from '../contexts/Auth';

const Home = () => {
  const { user, signOut } = useContext(AuthContext);
  const handleSingOut = () => signOut();
  return (
    <>
      <h1 className="h3 mt-3 mb-3 font-weight-normal">{user}</h1>
      <p className="mt-3 mb-3 font-weight-normal">
        While your token is valid, you'll be redirected automaticcaly to this
        page.
      </p>
      <p>
        You can also click on the button below to sign out and remove the token
        from your browser
      </p>

      <button
        className="btn btn-lg btn-primary btn-block mt-3"
        type="button"
        onClick={handleSingOut}
      >
        Sign out
      </button>
    </>
  );
};

export default Home;
