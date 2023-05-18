import { AiOutlineArrowLeft } from "react-icons/ai"

import { useNavigate } from "react-router-dom"

const TopBar =({name})=>{
    const navigate = useNavigate()

return (
<div className="sticky top-0 min-h-[3.5rem] flex items-center z-10 bg-white ">
                <div className="flex flex-1  items-center justify-between-  pl-2 ">
                
                <span className=" cursor-pointer w-[2.5rem] h-[2.5rem] rounded-full hover:bg-slate-300 grid place-items-center">
                <AiOutlineArrowLeft size={25} className="flex-none" onClick={() => navigate(-1)} />
                
                </span>
                    <h1 className="flex-1 text-lg text-center font-medium capitalize">{name}</h1>

                </div>

            </div>
)
}
export default TopBar