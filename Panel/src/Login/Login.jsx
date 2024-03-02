import React, { useEffect, useState } from 'react';
import img from '../Images/ImgLogin.jpg';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button';

function Login() {
  const [role, setRole] = useState([]);
  const [selectedRole, setSelectedRole] = useState('Admin');
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      emailOrUsername: '',
      password: ''
    }
  });
  const { errors } = formState;

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await axios({
          method: 'get',
          // url:`${url}role/GetAllRole`,
        });
        console.log(res.data);
        setRole(res.data);
      } catch (error) {
        console.log('error Occur', error);
      }
    };
    fetchRoles();
  }, []);

  const login = async (data) => {
    setLoading(true);

    try {
      const loginData = {
        ...data,
        userRole: selectedRole,
      };
      let loginEndpoint = '';
      if (selectedRole === 'Admin') {
        loginEndpoint = `${url}Login`;
      } else {
        loginEndpoint = `${url}emp/LoginEmp`;
      }
      const res = await axios({
        method: 'post',
        url: loginEndpoint,
        data: loginData,
      });
      if (res.status === 200) {
        console.log('Logged in successfully', res.data.data);
        toast.success('Logged in successfully', {
          position: 'top-right',
        });
      } else {
        console.log('Error occurred');
      }
    } catch (error) {
      setLoading(false);
      console.log('Error occurred', error.message);
      toast.error('Error occurred', {
        position: 'bottom-right',
      });
    }
  };

  return (
    <div className=''>
      <ToastContainer/>
      <div className="h-screen flex justify-center items-center bg-gray-300">
        <div className="bg-white shadow-md shadow-indigo-200 rounded-3xl sm:w-[800px] md:w-[1000px] h-[600px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="hidden sm:block">
              <img src={img} alt="..." className="h-[500px] object-cover w-full" />
            </div>

            <div className="flex justify-center items-center p-8">
              <form onSubmit={handleSubmit(login)} className="w-full max-w-sm">
              <h1 className="text-3xl text-center text-blue-500 font-bold mb-8">Login</h1>

<div className="mb-4">
  <label className="block text-lg font-semibold mb-1">Role:</label>
  <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} className="InputArea border border-blue-500 rounded-2xl w-full">
    {role.map((roles, RoleId) => (
      <option key={RoleId} value={roles.RoleName}>
        {roles.RoleName}
      </option>
    ))}
  </select>
</div>

<div className="mb-4">
  <label htmlFor="username" className=" text-lg font-semibold mb-1">Username:</label>
  <Input type="text" name="emailOrUsername" id="username" className="InputArea rounded-full "{...register('emailOrUsername', {
      required: 'Field is Required',
    })}
    autoComplete="off"
  />
  {errors.emailOrUsername && (
    <p className="text-red-400 text-[15px]">{errors.emailOrUsername.message}</p>
  )}
</div>

<div className="mb-4">
  <label htmlFor="password" className="block text-lg font-semibold mb-1">Password:</label>
  <Input type="password" name="password" id="password" className="InputArea rounded-full"{...register('password', {required: 'password is required',
    })}
    autoComplete="off"
  />
  {errors.password && (
    <p className="text-red-400 text-[15px]">{errors.password.message}</p>
  )}
</div>

<div className="mb-4">
  <Button type="submit" className={`w-full rounded-full text-white text-md bg-blue-600 ${
      loading ? 'opacity-50 pointer-events-none' : ''
    }`}
  >
    {loading ? (
      <div className="flex items-center justify-center">
        <i className="animate-spin rounded-full h-6 w-8 mr-2 border-t-2 border-b-2 border-gray-900"></i>
        Login
      </div>
    ) : (
      'Login'
    )}
  </Button>
</div>

<div className='py-2 flex space-x-14 text-black font-semibold text-md'>
  <input type="checkbox" className='text-black font-semibold text-md mx-2 ' />Remember me
  <p  className='text-black font-semibold text-md'>Forget password?</p>
 </div>
 <div className='my-2'>
     <p className='text-black font-semibold text-md text-center '>Don't have any Account? <Link to="sign" className='text-blue-700 px-2'>Register here</Link></p>
 </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Login;









 