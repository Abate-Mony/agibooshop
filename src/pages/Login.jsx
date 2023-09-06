import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay, Thumbs } from "swiper";
import Input from '../components/Input';
// import Form from '../components/Form';
import Button from '../components/Button';
import { useLoaderData, Form } from 'react-router-dom';
export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get("message")
}

export async function action({request}) {
  console.log(await request.formData())
  return null
}
const Login = () => {
  const message = useLoaderData()
  return (
    <>
      {message}
      <div
        className="min-h-screen flex items-center justify-center"
      >

        <Swiper
          direction="vertical"
          className=" max-h-[calc(100%-10px)] h-[500px] w-full relative group"
          modules={[Navigation, Pagination, Autoplay, A11y]}
          navigation={{
            prevEl: ".arrow__left",
            nextEl: ".arrow__right",
          }}

        >

          <SwiperSlide
            className="group"
          >
            <Form
              className="max-w-sm !mx-auto flex-1 group-[.swiper-slide-active]:scale-100 transition-all duration-700 scale-[0.8]"
            >
              <h1 className="mb-10 text-2xl text-center">Register </h1>
              <Input
                name="Full name"
                type="text"
                required={false}
                autoComplete={false}
                className="bg-red-400 !border-none "
              />
              <Input
                autoComplete={false}
              
                name="email address or phone"
                type="text"
                required={false}
                className="bg-red-400 !border-none "
              />
              <Input
                autoComplete={false}
                name="password"
                type="password"
                className="bg-red-400 !border-none "
              />
              <Button
                title="Register"
                className="!mx-auto !block w-[min(400px,calc(100%-29px))] !rounded-full !pb-4 !pt-3 min-h-[40px] group-[.swiper-slide-active]:scale-100 transition-all duration-700 scale-[0.8]  translate-y-12 group-[.swiper-slide-active]:translate-y-0"
              />
              <div className={`arrows arrow__right `}> register here</div>

            </Form>
          </SwiperSlide>
          <SwiperSlide
            className="group"
          >
            <Form

              method='post'
              className="max-w-sm !mx-auto flex-1 group-[.swiper-slide-active]:scale-100 transition-all duration-700 scale-[0.8]"
            >
              <h1 className="mb-10 text-2xl text-center">Login </h1>
              <Input
                name="email"
                type="text"
                required={false}
                className="bg-red-400 !border-none "
              />
              <Input
                name="password"
                type="password"
                className="bg-red-400 !border-none "
              />
              <Button
                title="login"
                className="!mx-auto !block w-[min(400px,calc(100%-29px))] !rounded-full !pb-4 !pt-3 min-h-[40px] group-[.swiper-slide-active]:scale-100 transition-all duration-700 scale-[0.8]  translate-y-12 group-[.swiper-slide-active]:translate-y-0"
              />
              <p
                className="text-center mt-10"
              >already a member</p>
              <div className={`arrows arrow__left `}> login here</div>

            </Form>
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  )
}

export default Login