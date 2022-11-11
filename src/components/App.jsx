import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const SharedLayout = lazy(() => import('./SharedLayout'));
const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Registration = lazy(() => import('../pages/Registration'));
const LogIn = lazy(() => import('../pages/LogIn'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="registration" element={<Registration />} />
          <Route path="log_in" element={<LogIn />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
