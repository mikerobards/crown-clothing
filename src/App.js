import { Routes, Route } from 'react-router-dom';

import Home from './components/routes/home/home.component';
import Navbar from './components/navbar/navbar.component';
import Authentication from './components/routes/authentication/authentication.component';


const Shop = () => {
  return <h1>This is the Shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
