import { Categories, Home, OurStore, Product,Cart } from './pages';
import { Footer, NavBar, SideBar } from './components';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="container mx-auto  md:px-0">
      <SideBar />
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ourstore' element={<OurStore />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
