
import {useNavigate} from 'react-router-dom'
const list=[
{value:"Home",link:"/"},
{value:"OurStore",link:"/ourstore"},
{value:"contact us",link:"/about-us"},
{value:"About us",link:"/contact-us"},
]
const NavMenu = () => {
const navigate=useNavigate();
  return (
    <div className='w-fit mx-auto'>
    <ul className='flex flex-wrap'>

    {list.map((arr,index)=>(
      <li key={index} className='mx-2 text-blue-900 font-montserrat text-md hover:text-blue-400 select-none 
      transition-colors duration-500
      '
      
      onClick={()=>navigate(`${arr.link}`)}
      >{arr.value}</li>))}
      </ul>
    </div>
  )
}

export default NavMenu