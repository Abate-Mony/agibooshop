import { Categories, Home, OurStore, Product, Cart, AboutUs, ContactUs, MessageBox, } from './pages';
import { Footer, NavBar, NavFooter, SideBar, AuthLogin } from './components';
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from "./pages/User"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotificationPopUp from './components/NotificationPopUp';
import WithRouter from "./withRouter"
// import { motion } from 'framer-motion'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/a11y"
import RootElement from './components/RootElement';
// import ImageView from './components/ImageView';
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "ourstore",
        element: <OurStore />
      },
      {
        path: "categories",
        element: <Categories />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
      {
        path: "product/:id",
        element: <Product />
      },
      {
        path: "user",
        element: <User />
      },
      {
        path: "auth",
        element: <AuthLogin />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ]
      },
    ]
  },

])
function App() {
  return (
    <div className="container mx-auto  md:px-0">
      <RouterProvider
        router={router}
      >

      </RouterProvider>
      {/* <SideBar />
      <NavFooter />
    */}
      <MessageBox />
      {/* <WithRouter /> */}

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ourstore' element={<OurStore />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/user' element={<User />} />
        <Route path='/auth' element={<AuthLogin />} >
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
