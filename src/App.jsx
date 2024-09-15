/** @format */

import Nav from './components/Nav';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './layouts/RootLayout';
import Implants from './pages/Implants';
import Bonding from './pages/Bonding';
import Whitening from './pages/Whitening';
import Crowns from './pages/Crowns';
import Retirement from './components/Retirement';
import Contacts from './components/Contacts';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="implants" element={<Implants />} />
        <Route path="bonding" element={<Bonding />} />
        <Route path="whitening" element={<Whitening />} />
        <Route path="crown" element={<Crowns />} />
        <Route path="retirement" element={<Retirement />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
