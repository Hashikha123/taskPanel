import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardTitle,
  } from "@/components/ui/card"
  import { Link } from 'react-router-dom';
  
  import { MdBookmarkAdded } from "react-icons/md";
  import { IoStorefrontSharp } from "react-icons/io5";
  import { FaFileCode } from "react-icons/fa";
  import { IoIosPersonAdd } from "react-icons/io";
  import { AiFillCloseCircle } from 'react-icons/ai';
  import {Modal,ModalHeader,ModalBody} from 'reactstrap'
  import 'bootstrap/dist/css/bootstrap.min.css';

function Task() {

const[modal,setModal]=useState(false);

  return (
    <div>
<Modal 
size='md'
isOpen={modal}
>
<ModalHeader
isOpen={!modal}
>
<div className='flex gap-x-48 md:gap-x-[370px]'>
<h1>Add Task</h1>
<AiFillCloseCircle className='cursor-pointer' onClick={()=>setModal(false)} size={25}/>
</div>
</ModalHeader>
<ModalBody>

</ModalBody>
</Modal>

   <div className='grid grid-cols-1 md:grid-cols-4 m-4 gap-x-4 gap-y-4'>

    <div>
    <Link to = "/admin/TotalTask">
      <Card className="bg-green-400">
        <CardTitle className="flex justify-center mt-3">Total Tasks</CardTitle>
        <CardContent className="flex justify-center items-center mt-3 gap-x-4"> <MdBookmarkAdded size={25}/><h1>20</h1> </CardContent>
      </Card>
      </Link>
      </div>

    <div>
      <Card className="bg-yellow-400">
        <CardTitle className="flex justify-center mt-3">FrontEnd</CardTitle>
        <CardContent className="flex justify-center items-center mt-3 gap-x-4"> <IoStorefrontSharp size={25}/><h1>12</h1> </CardContent>
      </Card>
      </div>
      <div>
      <Card className="bg-red-400">
        <CardTitle className="flex justify-center mt-3">Backend</CardTitle>
        <CardContent className="flex justify-center items-center mt-3 gap-x-4"> <FaFileCode size={25}/><h1>12</h1> </CardContent>
      </Card>
      </div> 
      <div>
      <Link to = "/admin/AddTask">
      <Card className="bg-blue-400 cursor-pointer" onClick={()=>setModal(true)}>
        <CardTitle className=" flex justify-center mt-3">Add</CardTitle>
        <CardContent className="flex justify-center items-center mt-3 "> <IoIosPersonAdd size={25}/> </CardContent>
      </Card></Link>
  </div> 
     
      </div>
    </div>
  )
}

export default Task
