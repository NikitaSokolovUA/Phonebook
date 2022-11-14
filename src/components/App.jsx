import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operation';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';

const SharedLayout = lazy(() => import('./Navigation'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Registration = lazy(() => import('../pages/Registration'));
const LogIn = lazy(() => import('../pages/LogIn'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/log_in" component={<Contacts />} />
            }
          />
          <Route
            path="registration"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Registration />}
              />
            }
          />
          <Route
            path="log_in"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route path="*" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
