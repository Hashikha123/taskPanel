import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminDash from './AdminDash'

function AdminLayout() {
  return (
    <>
    <div className='flex'>
<div>
    <AdminDash/>
</div>
<div className='flex-1 md:ml-[270px] bg-gray-100 pt-14'>
    <Outlet/>
</div>
    </div>
    </>
    // <div className='md:grid md:grid-cols-12 flex '>
    //     <div className='md:col-span-3 z-30'>
    //         <AdminDash/>
    //     </div>
        
    //     <div className=' md:col-span-9 pt-16 md:w-full w-screen bg-gray-100 overflow-y-scroll'>
    //   <Outlet/>
    //   </div>
    // </div>
  )
}

export default AdminLayout
