import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
// import useAuth from '../hooks/useAuth';

const AuthGuard: FC = ({ children }) => {
  // This useAuth() function should be replaced by whatever Authentication method we wish to use.
  // In this case we simply mock it's result.
  // Change the value of isAuthenticated to true to grant access to the protected pages.
  //   const { isAuthenticated } = useAuth();

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
};

export default AuthGuard;
