import React from 'react'
import { useForm } from 'react-hook-form';


function AdminLogin() {
    const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm();
     const onSubmit = (data) => {
         console.log(data);
           reset();
     }
  return (
    <section className="h-full flex justify-center items-center">
        <div className="flex w-3/5 h-3/5 overflow-hidden rounded-md bg-white shadow-lg">
            <div className="lg:flex flex-1 justify-center items-center sm:hidden">
                <img src="images/admin_login.jpg" alt=""/>
            </div>
            <div className="flex flex-1 flex-col justify-center items-center bg-[#E9EFFD]">
                <div className="mb-10">
                    <h2 className="text-3xl text-[#0F0673] font-bold tracking-wider">Admin Login</h2>
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center">
                    <div className="mt-3 sm:px-5 flex flex-col">
                        <input type="text" {...register('username', { required: 'Field is required', })} className={`border-2 outline-none rounded-md h-10 w-64  px-2 ${errors.username && "border-red-600"}`} placeholder="Username"/>
                        {errors.username && <small className="text-red-700 mt-2">{errors.username.message}</small>}
                    </div>
                    <div className="mt-3 flex flex-col">
                        <input type="password" {...register('password', { required: 'Field is required' })} className={`border-2 outline-none rounded-md h-10 w-64 px-2 ${errors.password && "border-red-600"}`} placeholder="Password"/>
                        {errors.password && <small className="text-red-700 mt-2">{errors.password.message}</small>}
                    </div>
                    <div className="mt-10">
                        <button className="border-2 bg-[#494BF5] w-64 py-2 rounded-md hover:bg-[#7D97F4]">
                            <span className="text-white">Login</span>
                        </button>
                    </div>
                </form>
                <div className="mt-3">
                    <span className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">Forgot Password?</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AdminLogin