import Onboarding from './wizards/onboarding/onboarding'

import Stuff1 from './stuff/shell2'
import CreateMarketplace from './wizards/createMarketplace/create-marketplace'
import Financing from './wizards/createMarketplace/financing'
import TenantInfo from './wizards/createMarketplace/tenant-info'
import Login from './login'
import apiClient from "./http-common"

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home/*" element={<Stuff1 />} />
        <Route exact path="/register/*" element={<Onboarding />} />
        <Route exact path="/create-marketplace/*" element={<CreateMarketplace />} />
        <Route exact path="/create-marketplace-2" element={<TenantInfo />} />
        <Route exact path="/create-marketplace-3" element={<Financing />} />
      </Routes>
    </Router>
  );
}

export default App;
