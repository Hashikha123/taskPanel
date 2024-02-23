import React from 'react'
import { AiFillPieChart } from 'react-icons/ai'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function EmpWeek() {
  return (
    <div>
      <div className=' bg-white md:max-w-[960px] w-full h-[250px] p-2 m-2 rounded-md shadow-lg shadow-gray-500'>
        <h1 className='text-center font-semibold text-[25px] font-serif underline text-blue-700'>Employee of the week</h1>
        <div className='flex md:justify-between flex-row'>
        <div className='ml-6 '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNd2VOXRFg2cEI3EnhRq7X2C5tmXNyXlkfjg&usqp=CAU" alt="not working" className='h-[180px] w-[180px] p-1 border-4 border-blue-600' />
        <h1 className='text-[15px] font-medium mx-12'>Hashikha</h1>
        </div>
        <div className='mr-6'>
            <h1 className='p-2 text-[18px] font-serif font-bold mx-12 text-pink-600'>Assign Task</h1>
         <center>  <AiFillPieChart size={100} color='blue'/>
         <h2 className='text-[18px] text-teal-900 font-serif font-bold'>10 Tasks</h2>
         </center> 
        </div>
        <div className='mr-6'>
            <h1 className='p-2 text-[18px] font-serif font-bold mx-12 text-green-800'>Completed Tasks</h1>
           <center><AiFillPieChart size={100} color='orange'/>
           <h2 className='text-[18px] text-red-800 font-serif font-bold'>9 Tasks</h2>
</center> 
        </div>
        </div>
      </div>

      <div className='mx-2 justify-between flex items-center my-1 w-[960px] h-[100px] rounded-md bg-white shadow-lg shadow-gray-500'>
       
            <div className=''>
                <img src="data:image/jpeg;base64,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" alt="abc" 
                className='ml-6 mb-2  h-16 w-16  rounded-full p'/>
            </div>
            <div className='mr-20'>
                <h1 className='text-[17px] text-blue-900 font-semibold font-serif'>Zairah</h1>
                <h3 className='text-[15px] text-green-800 font-semibold font-serif'>Active</h3>
            
        </div>
        <div className='mr-20'>
        <h1 className='text-[17px] text-green-700 font-semibold font-serif'>Assign Tasks</h1>
            <center><AiFillPieChart size={30} color='green'/>
                <h1 className='text-[18px] text-red-700 font-serif font-bold'>10 Tasks</h1>
                     </center>
        </div>
               <div className='mr-20'>
        <h1 className='text-[17px] text-pink-700 font-semibold font-serif'>Completed Tasks</h1>
           <center><AiFillPieChart size={30} color='red'/>
<h1 className='text-[18px] text-blue-700 font-serif font-bold'>7 Tasks</h1>
</center>
        </div>
      </div>
      
{/* <Card className="mx-3">
    <CardHeader></CardHeader>
    <CardContent>this is my card content...!</CardContent>
</Card> */}

      {/* <div className='mx-2 my-1 w-[960px] h-[100px] rounded-md bg-white shadow-lg shadow-gray-500'>
      </div>

      <div className='mx-2 my-1 w-[960px] h-[100px] rounded-md bg-white shadow-lg shadow-gray-500'>
      </div>

      <div className='mx-2 my-1 w-[960px] h-[100px] rounded-md bg-white shadow-lg shadow-gray-500'>
      </div> */}
    </div>
  )
}

export default EmpWeek
