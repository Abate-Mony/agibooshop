import { AiOutlineArrowLeft } from "react-icons/ai"

import { useNavigate } from "react-router-dom"

const TopBar =({name})=>{
    const navigate = useNavigate()

return (
<div className="sticky top-0 min-h-[3rem] z-10 bg-white ">
                <div className="flex justify-between- py-1 pl-2 mb-4">
                    <AiOutlineArrowLeft size={25} className="flex-none" onClick={() => navigate(-1)} />
                    <h1 className="flex-1 text-lg text-center font-medium capitalize">{name}</h1>

                </div>

            </div>
)
}
export default TopBar