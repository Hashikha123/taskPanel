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
import { AiFillCloseCircle, AiFillDelete } from 'react-icons/ai'
import { Button } from '@/components/ui/button'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

const dep=[
    {
    id:1,
    dep:'Sales',
    s_name:'Sales',
    Status:'Active'
    },

    {
        id:2,
        dep:'Sales',
        s_name:'Sales',
        Status:'Active'
    },

     {
        id:3,
        dep:'Sales',
        s_name:'Sales',
        Status:'Active'
    },

     {
        id:4,
        dep:'Sales',
        s_name:'Sales',
        Status:'Active'
        },

     {
        id:5,
       dep:'Sales',
        s_name:'Sales',
        Status:'Active'
    }
]

function Department() {
const[modal,setModal]=useState(false);

const{register,handleSubmit,formState}=useForm();

const{errors}=formState

const submit=(data)=>{
console.log("submitted data is :",data)
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
        <div className='flex gap-x-48 md:gap-x-[320px]'>
<h1>Add Department</h1>
<AiFillCloseCircle className='cursor-pointer' onClick={()=>setModal(false)} size={25}/>
</div>
    </ModalHeader>

    <ModalBody>

    <form onSubmit={handleSubmit(submit)}>
    <label htmlFor='name'>Department</label>
    <Input type="text" name="dep" id="name" placeholder="Enter Department Name" {...register("dep",{
        required:"Field is required"
    })} />
    <p className='text-red-400 text-[15px]'>{errors.dep?.message}</p>

    <label htmlFor='s_name'>Short Name</label>
    <Input type="text" name="s_name" id="s_name" placeholder="Enter Short Name" {...register("s_name",{
        required:"field is required"
    })} />
    <p className='text-red-400 text-[15px]'>{errors.s_name?.message}</p>

    <div className='flex justify-end mt-4'>
        <Button type="submit">Save</Button>
    </div>
    </form>
    </ModalBody>
</Modal>

        <div className='flex justify-end items-center mr-6 mt-4'>
            <Button onClick={()=>setModal(true)}>Add</Button>
        </div>
<Table className="md:ml-4 mt-4">
    <TableHeader className="bg-blue-800">
        <TableRow>
            <TableHead className="text-center">S.no</TableHead>
            <TableHead className="text-center">Department</TableHead>
            <TableHead className="text-center">Short Name</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
        </TableRow>
    </TableHeader>

<TableBody className="bg-white">
    {dep.map((item)=>(
        <TableRow key={item.id}>
            <TableCell className="text-center">{item.id}</TableCell>
            <TableCell className="text-center">{item.dep}</TableCell>
            <TableCell className="text-center">{item.s_name}</TableCell>
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

export default Department
