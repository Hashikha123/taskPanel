import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EmpProfile = () => {
  const { register, handleSubmit, setValue, getValues } = useForm();

  // Initial default values for the form
  const defaultValues = {
    username: 'Komal',
    Email: 'komal@gmail.com',
    password: 'komal123',
    role: 'Employee'
  };

  useEffect(() => {
    // Set default values when component mounts
    Object.keys(defaultValues).forEach(key => {
      setValue(key, defaultValues[key]);
    });
  }, [setValue]);

  const onSubmit = async (data) => {
    console.log("Initial Data:", defaultValues);
    console.log("Modified Data:", data);
    
    
  };

  return (
    <>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="bg-white p-4 rounded-md shadow-md shadow-slate-100 mt-4 w-[600px]">
          <h1 className="text-2xl text-white font-semibold mb-3 text-center mt-0 p-2 bg-blue-900 rounded-md w-full">
            Employee Details
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 w-[500px] justify-center">
              <div>
                <label className="text-lg font-medium">User Name</label>
                <Input type="text" name="username" {...register('username')} autoComplete="off" />
              </div>
              <div>
                <label className="text-lg font-medium">Email</label>
                <Input type="email" name="Email" {...register('Email')} autoComplete="off" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-[500px]">
              <div>
                <label className="text-lg font-medium">Password</label>
                <Input type="password" name="password" {...register('password')} autoComplete="off" />
              </div>
              <div>
                <label className="text-lg font-medium">Role</label>
                <Input type="text" name="role" {...register('role')} autoComplete="off" />
              </div>
            </div>
            <div className="flex justify-end mt-4 mr-0">
              <Button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
                Edit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmpProfile;
