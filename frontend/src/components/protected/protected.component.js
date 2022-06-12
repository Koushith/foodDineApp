import { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequireAuth = () => {
  // change the state after impl auth
  const [loggedIn, isLoggedIn] = useState(true);
  const location = useLocation();

  // Redirect them to the /login page, but save the current location they were
  // trying to go to when they were redirected. This allows us to send them
  // along to that page after they login, which is a nicer user experience
  // than dropping them off on the home page.
  // replace- removes the history. after login- ifyou come bac- you wont go to login page
  // !loggedIn ? <Navigate to='/login' state={{ from: location }} replace /> : <>{children}</>;
  return loggedIn ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};
