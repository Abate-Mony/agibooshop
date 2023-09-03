import { NavBar } from "../components"
const OurStore = () => {

  const StoreCart = ({ className }) => {
    return (
      <div className={`${className}  
      bg-green-400/25  pb-10 px-4 shadow 
      group min-h-[100px] overflow-h mt-2 grid place-items-center relative`}>
        {/* <div className="absolute h-full w-full left-0  top-auto -bottom-full
       group-hover:bottom-0
      transition-[bottom] duration-500 
      shadow-lg  bg-orange-200/25
      ">
        </div> */}
        <h1
          className="font-bold border w-fit px-10 bg-green-300 rounded-full -mt-6 pt-1 font-montserrat  text-lg pb-1.5"
        >
          Cherry's
        </h1>
        <p className="text-center leading-[1.1] tracking-tight text-sm ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, est.
        </p>

      </div>
    )
  }
  return (
    <>
      <NavBar />
      <div className="mt-[5rem]">
        <h1 className="text-3xl font-medium text-center tracking-tight mb-5">Our Store</h1>
        <div className="grid
        gap-x-1 gap-y-5
        grid-cols-[repeat(auto-fit,minmax(min(15rem,calc(100%-30px)),_1fr))] px-5 justify-center">

          {
            Array.from({ length: 4 }, (arr, index) => {
              return (<StoreCart
              
                key={Math.random()}
              />)
            })
          }
        </div>
      </div>
    </>
  )
}

export default OurStore