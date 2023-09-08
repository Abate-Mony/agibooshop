import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function ShoppingCart() {
    return (
        <div
            className='border-[0.0925rem] border-[#e8e8e8]   w-full py-4 px-2 md:px-2.5 lg:px-3'
        >
            <div
                className='flex w-full h-full justify-between items-center'
            >

                <div
                    className='flex items-center'
                >
                    <img
                        className='w-20'
                        src='https://www.mvmt.com/dw/image/v2/BDKZ_PRD/on/demandware.static/-/Sites-mgi-master/default/dw17979901/images/products/28000355_fr.jpg?sw=150&sh=150'
                    />
                    <div
                        className='flex text-start flex-col gap-y-1 items-center- justify-center-'
                    >
                        <h3
                            className='uppercase text-xl mb-1 font-bold text-black'
                        >ODyssey ii</h3>
                        <p
                            className='font-medium lg:hidden  uppercase leading-tight text-gray-500 text-sm'
                        >
                            fcfa172,743.00
                        </p>
                        <p
                            className='font-medium -mt-0.5 uppercase text-black leading-tight text-sm'
                        >
                            color:gilden green
                        </p>
                        <span
                            className='text-rose-700 uppercase text-xs font-medium lg:hidden '
                        >
                            remove
                        </span>
                    </div>

                </div>
                <div
                className='flex items-center space-x-5 lg:px-12'
                >
                    <div
                        className='flex border space-x-3  items-center  px-4 py-1.5 rounded-full   '
                    >
                        <span>

                            <AiOutlineMinus
                                size={16}
                            />
                        </span>
                        <span>2</span>
                        <span>
                            <AiOutlinePlus
                                size={16}
                            />
                        </span>
                    </div>
                    <p
                        className='font-medium hidden lg:block uppercase leading-tight text-gray-500 text-sm'
                    >
                        fcfa172,743.00
                    </p>
                    <span
                            className='text-rose-700 uppercase text-xs font-medium hidden lg:block '
                        >
                            remove
                        </span>

                </div>
            </div>
        </div>
    )
}
