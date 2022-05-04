import Onboarding from './wizards/onboarding/onboarding'

import Stuff1 from './stuff/shell2'
import CreateMarketplace from './wizards/createMarketplace/create-marketplace'
import Financing from './wizards/createMarketplace/financing'
import TenantInfo from './wizards/createMarketplace/tenant-info'
import Login from './login'
import PrivacyPolicy from './PrivacyPolicy'
import apiClient from "./http-common"
import jwtDecode from 'jwt-decode';
import { Navigate } from 'react-router-dom'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route
          path="/"
          element={
            <RequireNotAuth redirectTo="/home">
              <Login />
            </RequireNotAuth>
          }
        />

        <Route exact path="/register/*" element={<Onboarding />} />
        <Route exact path="/home/*" element={
          <RequireAuth redirectTo={"/"}>
            <Stuff1 />
          </RequireAuth>} />



        <Route exact path="/create-marketplace/*" element={<CreateMarketplace />} />
      </Routes>
    </Router>
  );
}

export default App;

function RequireAuth({ children, redirectTo }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/"} />;
  }

  let decoded = jwtDecode(token)

  if (decoded.exp * 1000 < Date.now()) {
    return <Navigate to={"/"} />;
  }

  return children;
}

function RequireNotAuth({ children, redirectTo }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return children;
  }

  let decoded = jwtDecode(token)


  if (decoded.exp * 1000 < Date.now()) {
    return children;
  }

  return <Navigate to={redirectTo} />;
}