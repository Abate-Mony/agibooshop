import { useSelector, useDispatch } from "react-redux"
import { toggleMessage as toggle } from "../actions/openMessageBox";
import { MdOutlineMenu, MdClose } from 'react-icons/md'
import { useState, useEffect } from 'react'
const MessageBox = () => {
    const isMessage = useSelector(state => state.message.isOpen);
    const dispatch = useDispatch()
    const toggleMessage = () => {
        dispatch(toggle());
        if (isOpen) {
            setIsOpen(false)
        }


    };
    useEffect(() => {
        if (isMessage) {
            const timer = setTimeout(() => {
                setIsOpen(true)
            }, 6000)

        }
        return () => {
        
        }
    }, [isMessage])

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={`fixed  z-[12] flex flex-col ${isMessage ? "visible opacity-100 pointer-events-auto translate-y-0 right-0" : "invisible pointer-events-none translate-y-1 opacity-0 -right-12"} transition-all duration-300 shadow-emerald-50 shadow   w-full md:w-[500px] h-[calc(100%-7rem)] md:h-[calc(100%-4rem)] top-0 md:max-w-[calc(100vw-2.5rem)] bg-white`}>

            <div className={`absolute ${isOpen ? "visible pointer-events-auto opacity-100 scale-100 duration-500 left-4" : "duration-100 invisible pointer-events-none opacity-0 scale-0 "} transition-all max-w-[250px] min-h-[10rem] rounded-md shadow left-2 bg-slate-200 shadow-emerald-100 w-full  top-[4.5rem]`}>
                <div
                    // onClick={() => toggleMessage()}
                    className="w-8 h-8 flex-none top-0 bg-orange-900 grid  place-items-center  -right-8  absolute ">

                    <MdClose className="text-white" size={20} onClick={() => setIsOpen(false)} />

                </div>


                <h1 className="text-center flex-1 text-lg 0 py-2 font-medium  shadow-slate-800 mt-2 mb-2">Our Social Accounts </h1>

                <div className="flex flex-wrap gap-x-4 gap-y-4 mb-4 px-2">
                    {
                        [1, 2, 4, 5, 1, 6].map(() => (<div
                            className="w-10 h-10 flex-none bg-orange-900  shadow shadow-emerald-200 rounded-full "></div>
                        ))

                    }
                </div>
                <p className="mb-4 leading-tight text-sm px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus.</p>
            </div>
            <div
                onClick={() => toggleMessage()}
                className="w-12 h-12 flex-none bg-orange-900  ring-4 rounded-full right-4 md:left-1/2 md:-translate-x-1/2 -bottom-7 absolute "></div>

            <div className="flex items-center px-2">

                <h1 className="text-center flex-1 text-xl py-2  shadow-slate-800 mt-4 mb-2">Message box </h1>

                <div className="w-12 ml-2 h-12 rounded-f relative flex-none flex items-center justify-center bg-white shadow-xl"

                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen
                        ? (
                            <MdOutlineMenu size={30} />

                        ) : (
                            <MdClose size={30} />

                        )


                    }                </div>
            </div>
            <div className="flex-1 overflow-y-auto px-4">
                {
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((t, i) => (i & 1 ? <div className="max-w-[90%] leading-4 border rounded-lg w-fit px-3 py-1 mb-2 bg-slate-100 ">hello susan are same code  </div> : <div className="max-w-[90%] leading-5 bg-blue-300 ml-auto border rounded-lg w-fit px-3 py-1 mb-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quam.</div>))

                }
            </div>

            <form className={` bg-transparent mb-7 flex-none w-full items-center flex  mx-1  lg:w-full lg:max-w-3xl `}>
                <div class="relative bg-transparent shadow bg-white flex-1 rounded-0">

                    <input type="search"
                        class="block w-full p-4 pl-10 text-sm  hover:outline-none hover:shadow-2xl text-gray-900 border- border-gray-300 rounded-lg- bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700- dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Message `} required />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                </div>
            </form>
        </div>
    )
}

export default MessageBox