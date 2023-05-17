import { Categories, Home, OurStore, Product,Cart,AboutUs, ContactUs ,MessageBox} from './pages';
import { Footer, NavBar, NavFooter, SideBar } from './components';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="container mx-auto  md:px-0">
      <SideBar />
      {/* <NavBar /> */}
      <NavFooter />
      <MessageBox/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ourstore' element={<OurStore />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
