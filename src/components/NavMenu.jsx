
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
const list = [
  { value: "Home", link: "/" },
  { value: "OurStore", link: "/ourstore" },
  { value: "contact us", link: "/about-us" },
  { value: "About us", link: "/contact-us" },
]
const NavMenu = () => {
// const {}
  const navigate = useNavigate();
  return (
    <div className='w-fit mx-auto'>
      <ul className='flex flex-wrap justify-center px-4'>
        {list.map((arr, index) => (
          <li key={index} className='mx-2 text-blue-900 font-montserrat text-xl md:text-xl hover:text-blue-400 select-none 
      transition-colors duration-500
      '
          ><NavLink className={({ isActive }) => isActive ? "text-blue-800 underline underline-offset-4" : "text-slate-800"} to={`${arr.link}`}>{arr.value}</NavLink></li>))}
      </ul>
    </div>
  )
}

export default NavMenu