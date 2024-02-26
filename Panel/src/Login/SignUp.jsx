import React from 'react'
import {useForm} from 'react-hook-form'
// import InputCom from './InputCom'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


function SignUp() {
    const {register,handleSubmit,formState}=useForm({
        defaultValues:{
            username:'',
            password:'',
            email:""
        }
    })
    const url = import.meta.env.VITE_BASE_URL;

    const {errors}=formState
// const watchUser=watch()

const signUp = async(data)=>{
    try{
        const res = await axios({
            method:'post',
            url:`${url}/user/SignUp`,
            data:data
        })
console.log(res)
        if(res.status===200){
            console.log(res.data)
        }
        else{
            console.log("not register")
        }
    }
    catch(error){
        console.error("error occur",error.message)
    }
}
   
    // console.log(watchUser)
  return (
    <div>
      <div className='flex justify-center items-center h-screen bg-gray-50'>
        <div className='h-[430px] w-[400px] bg-transparent rounded-lg shadow-md shadow-indigo-400'>
        <form onSubmit={handleSubmit(signUp)}>
        <h2 className='text-blue-500 text-center text-3xl font-sans p-3 font-bold'>SignUp</h2>

<div className="m-4 mt-2">
    <label htmlFor="username" className='text-md font-semibold font-sans'>Username</label>
    <Input type="text" name="username" className="InputArea" id="username" autoComplete="off" {...register("username",{
        required:"filled is required"
    })} />
    <p className='text-red-400 text-[15px]'>{errors.username?.message}</p>
</div>

<div className="m-4">
    <label htmlFor="password" className='text-md font-semibold font-sans'>Password</label>
    <Input type="password" className="InputArea" name="username" id="password" {...register("password",{
        required:"filled is required"
    })} />
    {errors.password && <p className='text-red-400 text-[15px]'>{errors.password.message}</p>}
</div>
<div className="m-4">
    <label htmlFor="email" className='text-md font-semibold font-sans'>Email</label>
    <Input type="email" name="email" id="email" className="InputArea" autoComplete="off" {...register("email",{
        required:"filled is required"
    })} />
        {errors.email && <p className='text-red-400 text-[15px]'>{errors.email.message}</p>}

</div>

<div className='m-4'>
<Button className='w-full bg-blue-600 text-white text-xl rounded-full shadow-md shadow-blue-400 p-2 ' type="submit"> <Link to="/"> SignUp </Link></Button>
</div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
