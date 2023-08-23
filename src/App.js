import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route, Layout } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import UserPage from './pages/userPage/UserPage';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <BrowserRouter className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<UserPage />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
