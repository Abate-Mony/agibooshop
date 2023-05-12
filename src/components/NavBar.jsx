// import {AiOutlineMessage} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import { actions } from '../actions/openSidebar'
const NavBar = () => {
  const [index, setIndex] = useState(0);
  const listItems = [
    "hairs",
    "wigs",
    "trouser"
  ]
  const ref = useRef(null)
  useEffect(() => {
     ref.current = setInterval(() => {
      var counter=index
      if (counter++ >= listItems.length-1) {
        setIndex(0)
        return
      }
      setIndex(counter)

    }, 3000)
    return ()=> clearInterval(ref.current)

  }, [index])
  const dispatch = useDispatch()
  const toggleSideBar = () => dispatch(actions.toggle())
  return (
    <div className="fixed left-0 w-full  z-10    top-4 h-[3rem] ">
      <div className="container text-4xl mx-auto h-full">


        <form className="bg-transparent w-[25rem] items-center flex max-w-[calc(100vw-2.5rem)] lg:w-full lg:max-w-3xl mx-auto">
          <div class="relative bg-transparent- shadow bg-white flex-1 rounded-2xl">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search"
              class="block w-full p-4 pl-10 text-sm rounded-lg hover:outline-none hover:shadow-2xl text-gray-900 border- border-gray-300 rounded-lg- bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700- dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Search ${listItems[index]}...`} required />
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
          <div className="w-12 ml-2 h-12 rounded-full flex-none flex items-center justify-center bg-white shadow-xl"
            onClick={toggleSideBar}
          >
            <MdOutlineMenu size={30} />
          </div>
        </form>

      </div>
    </div>
  )
}

export default NavBar