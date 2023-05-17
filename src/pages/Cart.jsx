import { CartItem, TopBar } from '../components'

const Cart = () => {

    return (
        <div className='pb-56'>
            <TopBar name={"Carts Center"} />
            <div className='flex flex-wrap'>
            
            {Array.from({length:10},(arr,i)=>(<CartItem />))}
            
            </div>

            
            <div className="bottom-0 z-10 w-full md:flex md:max-w-3xl md:rounded-lg mx-auto fixed bg-white rounded-t-2xl py-4 pb-0 min-h-[100px] shadow-2xl  left-0 right-0">

                <div className="flex items-center justify-between px-4 mb-6 md:gap-10" >
                    <h1 className="text-black text-xl font-semibold md:mb-4">Total</h1>
                    <h1 className="text-3xl  font-medium  tracking-tight italic">2,929 <sup className="text-slate-400 text-lg">frs</sup></h1>
                </div>
                <button type="button" class="text-white text-center bg-black  mb-5
            focus:outline-none w-[400px] max-w-[calc(100%-2.5rem)] mx-auto block
             hover:bg-slate-900 hover:text-white  font-medium rounded-none text-lg px-3 py-2 text-montserrat ">Place Order</button>

            </div>
        </div>
    )

}
export default Cart