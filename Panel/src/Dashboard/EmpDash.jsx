import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import {FaBars, FaRProject, FaUsers} from 'react-icons/fa';
import {AiFillAlipaySquare, AiOutlineClose, AiFillDatabase, AiFillHome, AiFillPicture, AiFillTags} from 'react-icons/ai';
import { FaArrowLeft } from "react-icons/fa";


function EmpDash() {
    const[open,setOpen]=useState(false);

const toggleSidebar=()=>{
   setOpen(!open)
}
const closeSidebar = () => {
    setOpen(false);
  };
const menuItems = [
    { id: 1, title: "Home", path:"/dash" },
    { id: 2, title: "Profile", path: "/dash/profile" },
    { id: 3, title: "Tasks", path: "/dash/task" }
   

];

const navigate=useNavigate();
const handleBack=()=>{
  navigate(-1)
}
  return (
    <div className='bg-gray-100 h-screen w-full'>
       <nav className="fixed top-0  w-full bg-white ">
  <div className="px-2 py-[10px] lg:px-0 lg:pl-3">
    <div className=" flex items-center justify-between">
      <div className="flex items-center justify-between">
        <button  data-drawer-toggle="logo-sidebar" type="button" className="inline-flex items-center px-1 py-2 text-sm text-gray-500 sm:hidden "
        onClick={toggleSidebar}>
           <FaBars size={25}/>
         </button>
      </div>
<div className='ml-4 text-lg font-semibold ms-0 md:me-80 font-serif'>
{/* {value && <span>Welcome {value}...!</span>} */}
<h1></h1>
</div>


      <div className="flex items-center ">
            <div>
              <button
            //    onClick={handleLogout}
                className="bg-red-600 py-1 px-3 mx-2 text-white rounded-full">Logout</button>
             </div>         
        </div>
    </div>
  </div>
</nav>

<aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-72 duration-300 h-screen  transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
<div className="flex justify-end  bg-white">
          <button
            className="text-gray-500 p-2 md:hidden "
            onClick={closeSidebar}>
            <AiOutlineClose color="black" size={20}/>     
          </button>
        </div>
   <div className="h-full px-4  text-xl font-semibold md:py-2 py-4 overflow-y-auto bg-white ">
<FaArrowLeft className='cursor-pointer' onClick={handleBack} size={25}/>
   <ul className='md:py-4 md:mt-2 px-7 py-0'>
    {/* <li
    className="flex items-center p-2 text-gray-900 rounded-lg "
    >
      <span className='flex items-center '> */}
{/* <img src="" alt='image' className='w-12 h-10 rounded-full'/> */}
{/* <h1 className='font-bold text-[22px] font-sans text-blue-900'>LK Softwares</h1>
</span>
      </li> */}
    <li>
    <center>
    <li>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OIreKFvX4sGmLSIrea6TPOziJjz6FwSRqw&usqp=CAU" alt="not working" className='h-[150px] w-[150px] mt-0 rounded-full align-center'/>
                </li>
            {/* <label htmlFor='fileInput'>
              <input
                type='file'
                id='fileInput'
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
              <img
                src={`${url}images/${selectedImage}` || `http://192.168.1.62:1010/images/ss.png`}
                alt='preview ' 
                className={`h-[150px] w-[150px]  rounded-full cursor-pointer`}
              />
            </label> */}
          </center>

    </li>
    <div className='mt-3'>
    {menuItems.map((menuItem) => (
                            <li className='py-1' key={menuItem.id}>
                                <Link to={menuItem.path} className="flex items-center py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100">
                                    
                                    {menuItem.id === 1  && <AiFillHome size={25}/>}
                                    
                                    {menuItem.id === 2  && <FaUsers size={25}/>}
                                    {menuItem.id === 3  && <AiFillDatabase size={25}/>}
                                    {menuItem.id === 4  && <AiFillAlipaySquare size={25}/>}
                                    {menuItem.id === 5  && <AiFillTags size={25}/>}
                                    {menuItem.id === 6  && <FaRProject size={25}/>}


             
                                    <span className="ms-3">{menuItem.title}</span>
                                    
                                </Link>
                            </li>
                            
                        ))}
          </div>
        </ul>
    
   </div>
</aside>

{/* <aside id="logo-sidebar" className={` ${open ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 aria-label=Sidebar`}>
                <div className="h-full px-4  overflow-y-auto bg-white ">
                    <ul className="space-y-1 px-3 font-semibold text-[18px]">

      <h1>Lk Softwares</h1>
                    <center>
                        <li>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4OIreKFvX4sGmLSIrea6TPOziJjz6FwSRqw&usqp=CAU" alt="not working" className='h-[150px] w-[150px] mt-0 rounded-full align-center'/>
                        </li>
                        </center> 
                        {menuItems.map((menuItem) => (
                            <li key={menuItem.id}>
                                <Link href={menuItem.link} className="flex items-center p-2 px-4 text-gray-900 rounded-lg hover:bg-gray-100">
                                    
                                    {menuItem.id === 1  && <AiFillHome size={25}/>}
                                    {menuItem.id === 2  && <FaUsers size={25}/>}
                                    {menuItem.id === 3  && <AiFillDatabase size={25}/>}
                                    {menuItem.id === 4  && <AiFillAlipaySquare size={25}/>}
                                    {menuItem.id === 5  && <AiFillTags size={25}/>}
                                    {menuItem.id === 6  && <FaRProject size={25}/>}


             
                                    <span className="ms-3">{menuItem.title}</span>
                                </Link>
                            </li>
                            
                        ))}
                    </ul>
                </div>
            </aside> */}
    </div>
  )
}

export default EmpDash
