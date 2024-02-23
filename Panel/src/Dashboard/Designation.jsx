import React, { useState } from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { FaEdit } from 'react-icons/fa'
import {AiFillCloseCircle, AiFillDelete } from 'react-icons/ai'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'


const des=[
    {
    id:1,
    des:'FrontEnd',
    Status:'Active'
    },

    {
        id:2,
        des:'Backend',
        Status:'Active'
    },

     {
        id:3,
        des:'Designer',
        Status:'Inactive'
    },

     {
        id:4,
        des:'Operator',
        Status:'Active'
        }

]

function Designation() {
const[modal,setModal]=useState(false)

const{register,handleSubmit,formState}=useForm();

const{errors}=formState

const save=(data)=>{
    console.log("submitted data is:",data)
}

  return (
    <div>

<Modal
size='md'
isOpen={modal}
>
    <ModalHeader
    isOpen={!modal}
    >
        <div className='flex gap-x-[300px]'>
<h1>Add Designation</h1>
<AiFillCloseCircle className='cursor-pointer' onClick={()=>setModal(false)} size={25}/>
</div>
    </ModalHeader>

    <ModalBody>

<form onSubmit={handleSubmit(save)}>
    <label htmlFor='designation'>Designation</label>
    <Input type="text" name="designation" id="designation" placeholder="Enter Designation" {...register("designation",{
    required:"Field is required"
    }
    )}/>
    <p className='text-red-400 text-[15px]'>{errors.designation?.message}</p>

    <div className='flex justify-end mt-4'>
        <Button type="submit">Save</Button>
    </div>
</form>

    </ModalBody>
</Modal>
        <div className='flex justify-end items-center mr-6 mt-4'>
            <Button onClick={()=>setModal(true)}>Add</Button>
        </div>
<Table className="md:ml-4 mt-8">
    <TableHeader className="bg-blue-800">
        <TableRow>
            <TableHead className="text-center">S.no</TableHead>
            <TableHead className="text-center">Designation</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
        </TableRow>
    </TableHeader>

<TableBody className="bg-white">
    {des.map((item)=>(
        <TableRow key={item.id}>
            <TableCell className="text-center">{item.id}</TableCell>
            <TableCell className="text-center">{item.des}</TableCell>
            <TableCell className="text-center">{item.Status}</TableCell>
            <TableCell className="flex items-center justify-center">
                <FaEdit size={25} color='blue'/> <AiFillDelete size={25} color='red'/>
            </TableCell>
        </TableRow>
    ))}
    <TableRow>
    
    </TableRow>
</TableBody>


</Table>
    </div>
  )
}

export default Designation
