import ReactStars from 'react-rating-stars-component'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({ imgUrl, name, price,l }) => {
const navigate=useNavigate()
  return (
    <div
    onClick={()=>navigate("/product/3")}
    className={`flex-none ${l?"w-[55%]":"w-1/2"} sm:w-1/3 md:w-1/3  lg:w-1/5 p-2`}>

      <div className=' min-h-[200px]  flex- items-center justify-center  rounded- shadow-lg  bg-white'>
        <div className="relative mb-2  h-[10rem] overflow-hidden">
          <img
            className="w-full h-full"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgAeAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEEBQYIAwL/xAA/EAABAwIDBQQHBQUJAAAAAAABAAIDBBEFBiEHEjFBURNhcYEUIjKRobHBI1Jy0fBCQ2KC4RUkMzRzkqKy8f/EABgBAQADAQAAAAAAAAAAAAAAAAABAgME/8QAHxEBAQACAQUBAQAAAAAAAAAAAAECETEDEiEiQRNR/9oADAMBAAIRAxEAPwCcUREBEVCgqi1PNmfcJy3vRPLqqrH7iH9n8R4D5qN6zbLjckjvQ6CiiYOG+HPI8dQotkXmGVToi50q9q+bahxMdZBTg8Gw0zdP91ysTNnbNNRBNTy43VuZI4l3rWPgCNQO4KO5P5V1Ci5So8xY/SSb9NjGIxuPSqeb+IvYrb8F2tZko2iOtbT4gxvOVm48j8TdPgncn8r8T8i1HKOf8JzKBEwupaznBMRqf4XcD8+5baFZnZZyqiIiBERAREQFqWdsyHD4jQUUlquRvrPH7sfmf1yWexvEosJwuprptWxNuB95x0A8yQFBk+KvqqmSrqpA6SV/rOPU8VTK6bdHDuu6+ZsHbVSB0p3jxPe5eNNliI07hNxe8Eu6Acv10VTjkIaRvi5C95saYyZrQ4DePPx/osvLs9VvT5XhMLDKfXsb28NFeQ5eooqd4e0OksCD05q1qcZjjvZw1BJvyPJeNTmBjZHNvcb7Xe9o+qnyjeLINwGjvZ0YubADoevx+CSYHSEPu0B3Znh1I/VlZNx1khBJHqtYfNUmxsAxltzv7w4+CeTeKtPhjsOxCORh+zeSCRwGl+Hj8wpgydmE1rW0NY8mcNvG9x1eBxB7wozpahlVEBxJsLe5UocSmpxBUwOtNC5sjCeo0IPuUy6qvUwmUTwitcMrY8Qw+nrIfYmjDwOl+Suls4BERAREQRZttxp0EFLhUbiN9rqiW3MDRo/7HyChiXEHFjG3Oh9623a/ifpWcsQ3SS2m3IG/ytufiXKO5HkE/dWd5dEusZHq2qdug6ndI4nvVxNXufuHm0WCx4bvXDQRzIQtf5oS1fVNa6V2pOotcnv/APF4PqnO4k2sB4fqy8XtOnS5C8gDa6G14ap1hZxGlj363Xoa1znMuTdpuD7lYxguIb1NghuPJDba8Fxssla06Xc53FX7cQaaYNaeG8B4cvktJhlcwixtxWQhqXNsL2sNPio00mddC7IsT9LwWekJB9Gk3mW5Ndr87rfVCGxLE9zH5KQkbtTA7Tvabj4Fym9aY8ObqT2ERFKgqFVXlVf5aX8B+SDkrMtd6fitdVkn+8VEknvddYaPW46rIVYMsryRqST5kq2ZCRBLJ914F+mqzb6ZHA8Mlr6lkTbhri1twLnUgfVSFWbJ8Uhk+yaydjot8W/ZPNp79Vtmx3LNMzAafGKmBpnm1i3h7IabXt5KTLKe1GWerqOWKrKlbAXNkp5WsBsXOYRuHo7olBlSWqq4qWSZlNK82aZhZp6a/BdSSwxytLZGNc0ixDhe68Rh9GBYUsFt7et2Y49fFT2n6T+OacZ2e4xh1FJVuhbJFH7boje3eOo71iHUDarDZaprN2WEguHVridfeur30cDw8FjbPFnacQtTiyDQ0ktU2C0tHUte10Eov2Ydx3T0uAR016qO0mccwCNwdY9CvsOOh8FmswYPLhOKPpZmua+N5BusRIALclCzctl9W6mzhhRB9ucMPg67T8100FyTlWr9Ex3DpySBHOx+nc4H6LrZWxU6vxVERWZC8qlpfTytb7RYQPGy9VQhByW+NrquawNrk2OhGqQUhlw+XTXfadPH+izOPUH9nZpxWi3bBlRI1o7ibj3ghfFDHaF8TQDvMDgf5/yWVunZjNp22YvvkfDGWsY2vj9z3BbStQ2ZSb2XTHe+5O7yBAP1W3rScObOaysERFKgiIggXbNRtizR2gGssQJt4qLpRZ5Hj81M+2yEOxekePa7EAjzKh+qaBK4uIADieKz+uqT0jyhduFruYBXYlM4vp4nO9pzAT7lyFQU0ldUxUsdw+ctiBtzcbfULsBoDQGgWAFgrYsupxH0iIrMhERBB216h9CzrDVtHq1sAcNP22aH4Bq1am3Y6qnA4F74Se7W30UtbZMGlr8uxYhTs3pcOl7V1hc9mRZ3u0J7gVDz3Nc3ebre0jTfnz+HyWWXLs6N3imTZZIfRamM891/5rfVG2zKqYYhIDYuG64fEfX4KSAdFfDhh1p7qoiKzIRL2VjjGKUuEYfLW1j92KMXtzceQHeUJNoz2k7lXmBrCb9kzny/VgVEFdS7pJ4bxIHgtsxfMwrK2oqZC3tZ3E6O0YLrAw1MNTWNe/8Awo7WHUrHd3t3akxmLZNk+XZK3NNHNNH9nSn0h99fZ9n/AJbq6GAsFpWyzDDTYF/aMjQH1xD4/wDSHsnz1d5hbstMZ4cvVs7tT4IiKzMREQfMjGyMcx7Q5rhZzSLgjooCz/kury3VzVNDE+TCSd+KUa9gSfYd3X4HvHep/Xy5ocCHC4IsQRxUWbWxzuNQHs8xqFk3YTvML3G0T+IP8JHM34deWqmbDMXa9scNYWslcPUeDdko6tKxWK7OssYlUGpdhwp5ifWNMeza/wDE0eqfMLJ4Zl+LDIzHTVM7mE3Mcx32E+B4eSrJY1zzxyjNIvljQ1oAFgvpXYLPF6SWuw6emgqHU8r22ZM3iw8jxCgTN2Wc6x1jYK+PEcWaSexfG58zLDr93wOq6HVLKLNrY53HhykzKWOVeLS4Y+kljqooRNKwgXY08AddCei2bI2zTGMVrIjitHPRYaw/bOqG7kkn8LWHUX6ldDBjQ4uAAJ4kDUqtlHat+lfMTGxxtjjaGMaLNaBoB0X2iKzMREQEREBERAREQEREBERAREQEREBERB//2Q==" alt="wig" />
          
          
          <h1 className="font-montserrat absolute bottom-0 w-full text-center from-neutral-400 bg-gradient-to-r font-medium
    ">Camern hairs</h1>

        </div>
        <p className="leading-none px-2 mb-2 text-xs sm:text-sm r">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex pb-4  justify-between px-2 font-poppins">
          <div>
            <h4  className='text-xs sm:text-sm lg:text-lg leading-none text-slate-400' style={{textDecoration:"line-through"}}>199 <sup className='text-orange-500'>frs</sup></h4>
            <h4  className='text-xs sm:text-sm lg:text-lg leading-none'>199<sup className='text-orange-500'>frs</sup></h4>
          </div>
          <div>
          <ReactStars
          count={5}
          size={15}
          isHalf
          value={4}
          activeColor="#ffd700"
          edit={false}
          />
          <img className='w-4 h-4 ml-auto' src="https://ecommercewebsitewithbootstrap.vercel.app/static/media/wish-black.f1f5b51751846dbfc0887729a7b4f348.svg" alt="" />
          </div>

        </div>



      </div>
    </div>
  )
}

export default ProductCard