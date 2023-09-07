import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import { BsMoon } from 'react-icons/bs'
import { actions } from '../actions/openSidebar'
const NavBar = ({ isInView }) => {
  const { isOpen } = useSelector(state => state.sideBar)
  const [index, setIndex] = useState(0);
  const listItems = [
    "hairs",
    "wigs",
    "trouser"
  ]
  const ref = useRef(null)
  // useEffect(() => {
  //   window.addEventListener("popstate", () => {
  //     if (isOpen) {
  //       console.log("a state was pop")
  //       dispatch(actions.close())
  //     }
  //   })
  //   return () => {
  //     window.removeEventListener("popstate", () => {
  //       if (isOpen) {
  //         console.log("a state was pop")
  //         dispatch(actions.close())
  //       }
  //     })
  //   }
  // }, [])
  window.addEventListener("popstate", () => {
    if (isOpen) {
      // console.log("a state was pop")
      dispatch(actions.close())
    }
  })
  useEffect(() => {
    ref.current = setInterval(() => {
      var counter = index
      if (counter++ >= listItems.length - 1) {
        setIndex(0)
        return
      }
      setIndex(counter)

    }, 3000)
    return () => clearInterval(ref.current)

  }, [index])
  const dispatch = useDispatch()
  const toggleSideBar = () => {
    dispatch(actions.toggle())
    window.history.pushState({}, null, `${window.location.href}?#opensidebar`)
  }
  return (
    <div className={`fixed left-0 w-full  z-10   ${isInView ? "bg-transparent" : "bg-white"} h-[5rem] transition-colors bg-opacity-95 duration-500 top-0 pt-4 `}>
      <div className="container text-4xl mx-auto h-full">
        <form className={` bg-transparent w-[25rem] items-center flex max-w-[calc(100vw-2.5rem)] lg:w-full lg:max-w-3xl mx-auto`}>
          <div class="relative bg-transparent shadow bg-white flex-1 rounded-2xl">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search"
              class="block w-full p-4 pl-10 text-sm rounded-lg hover:outline-none hover:shadow-2xl text-gray-900 border- border-gray-300 rounded-lg- bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700- dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Search ${listItems[index]}...`} required />
            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
          <div className="w-12 ml-2 h-12 rounded-full relative flex-none flex items-center justify-center bg-white shadow-xl"
          // onClick={toggleSideBar}
          >
            <MdOutlineMenu size={30} onClick={toggleSideBar}

            />
            <span className={`w-10 h-10 grid place-items-center bg-white rounded-full shadow cursor-pointer transition-all duration-700 absolute top-14 ${isInView ? "visible opacity-100 " : "invisible opacity-0 pointer-event-none"}`}> <BsMoon size={30} /></span>
          </div>
        </form>

      </div>
    </div>
  )
}

export default NavBar