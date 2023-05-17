import { motion } from "framer-motion"
import { useEffect } from 'react'
const Popup = ({ message, toggle,closeModal,confirmFunc, children }) => {


    return (
        <motion.div
            initial={{x:"-50%",y:"-50%"}}

            animate={{ scale: toggle ? 1 : 0 }}
            className={`fixed ${toggle ? "visible" : "invisible"} px-4 transition-[visibility] duration-200 flex flex-col justify-between  overflow-hidden top-1/2  -translate-y-1/2  shadow   z-10  left-1/2  -translate-x-1/2 max-w-[calc(100vw-2.5rem)] w-[300px] md:w-[500px] bg-white rounded-2xl  max-h-[calc(100vh-6rem)] min-h-[200px]`}>
            <div className="absolute w-10 h-10  rounded-0 bg-orange-800 right-0 " onClick={() => closeModal(false)}></div>

            <div className="flex-1 overflow-y-auto mb-4">

                <h1 className="text-center mb-6 text-2xl md:text-2xl mt-4 font-montserrat font-medium">Alert Box</h1>
                <p className=" text-center  leading-5 font-montserrat text-sm md:textsm lg:text-xl ">

                    {children || "this an empty aler box with no message "}
                </p>

            </div>
            <div className="mb-4 flex justify-center gap-6 " >

                <button type="submit" class="text-white absolute- right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800" onClick={() => closeModal(false)} >Cancel</button>
                <button type="submit" class="text-white absolute- right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={confirmFunc} >Confirm</button>
            </div>

        </motion.div>
    )
}

export default Popup