import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import {  AiFillDelete, AiOutlineCloseCircle } from 'react-icons/ai'
import { Button } from '@/components/ui/button';
import {Modal,ModalHeader,ModalBody} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const Taskdata=[
    {
    id:1,
    task: 'Task 1',
    depart: 'Sales',
    AssignTo : 'ABC',
    taskDes: 'This is Task 1',
    submitDate: '12-02-2024'
    },
    {
        id:2,
        task: 'Task 2',
        depart: 'Marketing',
        AssignTo : 'XYZ',
        taskDes: 'This is Task 2',
        submitDate: '10-02-2024'
        },
        {
            id:3,
            task: 'Task 3',
            depart: 'IT',
            AssignTo : 'ABCD',
            taskDes: 'This is Task 3',
            submitDate: '12-03-2024'
            },
]


const depart=[
    {
        id:1,
        title:'Sales',
    },
    {
        id:2,
        title:'Developers',
    }, {
        id:3,
        title:'Marketing',
    }, {
        id:4,
        title:'Designing',
    }, 
]

function AddTask() {
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
    <ModalHeader className='bg-blue-800 text-white text-[16px] font-semibold '
    isOpen={!modal}
    >
<div className='flex gap-x-48 md:gap-x-[330px] '>
<h1 className=''>Add New Task</h1>
<AiOutlineCloseCircle className='cursor-pointer' onClick={()=>setModal(false)} size={28}/>
</div>
    </ModalHeader>
 <ModalBody>

    <form onSubmit={handleSubmit(submit)}>
        <div>
    <label htmlFor='task'>Task Name :</label>
    <Input type="text" name="task" id="task"  {...register("task",{
        required:"Field is required"
    })} />
    <p className='text-red-400 text-[15px]'>{errors.task?.message}</p>
    </div>
    <div>
     <label htmlFor='department'>Department :</label>
    <select  className=' w-full InputArea'>
        {depart.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
          
        </select>
          </div>
<div>
    <label htmlFor='AssignTo'>Assign To :</label>
    <Input type="text" name="AssignTo" id="AssignTo"  {...register("AssignTo",{
        required:"Field is required"
    })} />
    <p className='text-red-400 text-[15px]'>{errors.AssignTo?.message}</p>
</div>
    <div>
    <label htmlFor='taskDes'>Task Description :</label>
    <Input type="text" name="taskDes" id="taskDes"  {...register("taskDes",{
        required:"Field is required"
    })} />
    <p className='text-red-400 text-[15px]'>{errors.taskDes?.message}</p>
    </div>
  <div>
    <label htmlFor='submitDate'>Submit Date :</label>
    <Input type="date" name="submitDate" id="submitDate"  {...register("submitDate",{
        required:"Field is required"
    })} />
    <p className='text-red-400 text-[15px]'>{errors.AssignTo?.message}</p>
    </div>

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
            <TableHead className="text-center">Task Name</TableHead>
            <TableHead className="text-center">Department</TableHead>
            <TableHead className="text-center">Assign To</TableHead>
            <TableHead className="text-center">Task Description</TableHead>
            <TableHead className="text-center">Submit Date</TableHead>
            <TableHead className="text-center">Action</TableHead>
        </TableRow>
    </TableHeader>

<TableBody className="bg-white">
    {Taskdata.map((item)=>(
        <TableRow key={item.id}>
            <TableCell className="text-center">{item.id}</TableCell>
            <TableCell className="text-center">{item.task}</TableCell>
            <TableCell className="text-center">{item.depart}</TableCell>
            <TableCell className="text-center">{item.AssignTo}</TableCell>
            <TableCell className="text-center">{item.taskDes}</TableCell>
            <TableCell className="text-center">{item.submitDate}</TableCell>
            <TableCell className="flex items-center justify-center">
                <FaEdit size={25} onClick={()=>setModal(true)} color='blue'/> <AiFillDelete size={25} color='red'/>
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

export default AddTask
