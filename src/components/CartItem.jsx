import ReactStars from 'react-rating-stars-component'
import { BiChevronDown, BiChevronUp, } from 'react-icons/bi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CartItem = () => {
const navigate=useNavigate();
    const [counter, setCounter] = useState(1);

    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const decrementCounter = () => {
        if ((counter <= 1)) return
        setCounter(counter - 1)
    }

    return (
        <div className="px-4  rounded-lg py-1.5 w-full md:w-1/2 lg:w-1/3">
            <div className="flex rounded-2xl shadow-lg bg-white gap-4 py-1 ">
                <div className="flex-none  relative w-[6rem] h-[5rem]  my-2 rounded-sm ">
                    <span className="absolute rounded-full z-[4] -top-2 -right-2 h-5 w-5 bg-orange-400 text-xs flex items-center justify-center">{counter}</span>
                    <img className="w-full h-full"
                        src="data:image/jpeg;base64,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" alt="wig" />
                </div>
                <div className="flex flex-col flex-1 " onClick={()=>navigate("/product/3")}>
                    <h1 className="text-lg font-medium leading-normal mb-">Brasilian Hairs</h1>
                    <p className="text-slate-500 leading-4 text-xs md:leading-tight md:text-sm ">lorem ihsd sha ius d  hhoidfh sadfugsaodg </p>
                
                <div className="flex justify-between"> 
                <ReactStars
                        count={5}
                        size={15}
                        isHalf
                        value={3.5}
                        activeColor="#ffd700"
                        edit={false}
                    />

<h4 className="text-sm md:text-sm lg:text-lg font-semibold">4678 <sup>frs</sup></h4>                
                
                </div>
                </div>
                <div className="flex-none space-y-2 w-[2.5rem]  relative">
                    <span className="absolute rounded-full z-[4] -top-2 -right-2 h-5 w-5 bg-orange-400 text-xs flex items-center justify-center">x</span>

                    <BiChevronUp size={20} onClick={incrementCounter}/>
                    <BiChevronDown size={20} onClick={decrementCounter}/>
                </div>
            </div>

        </div>
    )

}
export default CartItem