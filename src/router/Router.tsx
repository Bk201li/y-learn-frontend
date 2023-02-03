import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routesList from './routesList';
import { useAtom } from 'jotai';
import { userLoggedIn } from '../store/atoms/userInfos';
const SignIn = lazy(() => import('../pages/sign-in'));

const Router: React.FC = () => {
  const [loggedIn] = useAtom(userLoggedIn);

  return (
    <BrowserRouter>
      {!loggedIn ? (
        <>
          <Routes>
            {routesList.map((route) => (
              <Route path={route.path} element={<route.element />} key={`key_${route.path}`} />
            ))}
          </Routes>
        </>
      ) : (
        <SignIn />
      )}
    </BrowserRouter>
  );
};

export default Router;
