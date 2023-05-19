import { Categories, Home, OurStore, Product, Cart, AboutUs, ContactUs, MessageBox, } from './pages';
import { Footer, NavBar, NavFooter, SideBar, AuthLogin } from './components';
import { Routes, Route } from 'react-router-dom'
import User from "./pages/User"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {
  return (
    <div className="container mx-auto  md:px-0">
      <SideBar />
      {/* <NavBar /> */}
      <NavFooter />
      <MessageBox />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ourstore' element={<OurStore />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/user' element={<User />} />
        <Route path='/auth' element={<AuthLogin />} >
          <Route index  element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
