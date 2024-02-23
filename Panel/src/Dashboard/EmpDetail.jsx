import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import { FaEdit} from 'react-icons/fa'
import {TfiAlignLeft} from 'react-icons/tfi'
import { AiFillDelete, AiOutlineArrowDown, AiOutlineCloseCircle } from 'react-icons/ai'
import { Button } from '@/components/ui/button'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Modal,ModalHeader,ModalBody} from 'reactstrap';
  import {useForm} from 'react-hook-form'
import{Input} from "@/components/ui/input"
import SearchForm from './SearchForm'

export default function EmpDetail() {
const records=[
    {
        id:1,
        name:'Haseen',
        email:'abc@gmail.com',
        age:'19',
        phone:'5765649798',
        position:'BackendtEnd',
        
    },
    {
        id:2,
        name:'Deepshikha',
        email:'abcd@gmail.com',
        age:'20',
        phone:'576564598',
        position:'FrontEnd',
        
    },{
        id:3,
        name:'Nikita',
        email:'nikkirana@gmail.com',
        age:'78',
        phone:'57669798',
        position:'FrontEnd',
        
    },{
        id:4,
        name:'vashika',
        email:'abc@gmail.com',
        age:'22',
        phone:'1212345988',
        position:'Graphic Designer',
        
    }
]

const gender=[
    {id:1,title:'Male'},
    {id:2,title:'Female'},
    {id:3,title:'others'}
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
const desi=[
    {
        id:1,
        title:'FrontEnd',
    },
    {
        id:2,
        title:'Backend',
    }, {
        id:3,
        title:'Designer',
    }, 
]
const[modal,setModal]=useState(false);
const{register,handleSubmit} = useForm();

const[showField,setShowField]=useState(false);
const[EduShow,setEduShow]=useState(false);
const [searchTerm, setSearchTerm] = useState({ name: ''});
const [filter,setFilter]=useState(false);

const submit=(data)=>{
    console.log("Submited data",data);
}
const haandleShow=()=>{
setShowField(!showField)
}

const toggleSearchModal = () => {
    setFilter(!filter);
  };

const haandleEdu=()=>{
    setEduShow(!EduShow)
}

// const handleSearchChange = (e, fieldName) => {
//     const value = e.target.value;
//     setSearchTerms(prevSearchTerms => ({
//       ...prevSearchTerms,
//       [fieldName]: value,
//     }));
//   };

  const handleSearch = (fieldName, value) => {
    setSearchTerm(prevSearchTerms => ({
      ...prevSearchTerms,
      [fieldName]: value.toLowerCase(),
    }));
  };
  
  


  return (
    <div>

{/* <Modal
size='md'
isOpen={filter}
>
<ModalHeader
isOpen={!filter}
>
    <div className='flex gap-x-[350px]'>
           <h1>Search Data</h1>      
      <AiOutlineCloseCircle size={25} onClick={()=>setFilter(false)} className='cursor-pointer'/>
    </div>
</ModalHeader>
<ModalBody>

    
    <div className='grid grid-cols-2 gap-x-4'>
      <div>
         <label>Name:</label>
       <Input type="text"/> 
    </div>

<div>
     <label>Position:</label>
       <Input type="text"/> 
</div>
</div>

<div className='my-2 flex justify-end'>
    <Button>Serach</Button>
</div>
</ModalBody>
</Modal> */}

<SearchForm
          isOpen={filter}
        onSearch={handleSearch}
        // onSubmit={onSubmitSearch}
        toggle={toggleSearchModal}
      searchFields={[
         { name: 'name', label: 'name', placeholder: 'Search here...' },
    
  ]}
/>

        <Modal
        size='lg'
        isOpen={modal}
        >
            <ModalHeader
            isOpen={!modal}
           >
            <div className='flex gap-x-96 md:gap-x-[580px]'>
                <h1>Personal Information</h1> 
                
                <AiOutlineCloseCircle size={25} onClick={()=>setModal(false)} className='cursor-pointer'/>
                </div>
            </ModalHeader>

            <ModalBody>
                <form onSubmit={handleSubmit(submit)}>
        <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <label htmlFor='name'>Name:</label>
                <Input type="text" id="name" name="name" {...register("name",{
                    reruired:"field is required...!"
                })}/>
          </div>
           <div>
                <label htmlFor='LastName'>Last Name:</label>
                    <Input type="text" id="LastName" name="LastName" {...register("LastName",{
                          reruired:"field is required...!"
                           })}/>
             </div>
        </div>     
        <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <label htmlFor='FatherName'>Father Name:</label>
                <Input type="text" id="FatherName" name="FatherName" {...register("FatherName",{
                    reruired:"field is required...!"
                })}/>
          </div>
           <div>
                <label htmlFor='DOB'>Date of Birth :</label>
                    <Input type="date" id="DOB" name="DOB" {...register("DOB",{
                          reruired:"field is required...!"
                           })}/>
             </div>
        </div> <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <label htmlFor='gender'>Gender:</label>
                <select  className=' w-full InputArea'>
        {gender.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
          
        </select>
               
                  
          </div>
           <div>
                <label htmlFor='national'>Nationality:</label>
                    <Input type="text" id="national" name="national" {...register("national",{
                          reruired:"field is required...!"
                           })}/>
             </div>
        </div> <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <label htmlFor='Emr_No'>Emergancy Number:</label>
                <Input type="text" id="Emr_No" name="Emr_No" {...register("Emr_No",{
                    reruired:"field is required...!"
                })}/>
          </div>
           <div>
                <label htmlFor='marital'>Marital Status:</label>
                    <Input type="text" id="marital" name="marital" {...register("marital",{
                          reruired:"field is required...!"
                           })}/>
             </div>
        </div> <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <label htmlFor='adhar'>Adhar:</label>
                <Input type="text" id="adhar" name="adhar" {...register("adhar",{
                    reruired:"field is required...!"
                })}/>
          </div>
           <div>
                <label htmlFor='pan'>PAN:</label>
                    <Input type="text" id="pan" name="pan" {...register("pan",{
                          reruired:"field is required...!"
                           })}/>
             </div>
        </div> <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <label htmlFor='department'>Department:</label>
                <select  className=' w-full InputArea'>
        {depart.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
          
        </select>
          </div>
           <div>
                <label htmlFor='designation'>Designation:</label>
                <select  className=' w-full InputArea'>
        {desi.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.title}
                      </option>
                    ))}
          
        </select>
             </div>
        </div> 

            <div className='flex justify-center items-center mt-4 mb-2 gap-x-2'>
              <h1 className='text-[20px] font-semibold'>Contact Information</h1>
               <AiOutlineArrowDown onClick={haandleShow} size={25}/>
          </div>
          <hr/>
        {showField && (
                <>
                <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <label htmlFor='Address1'>Current Address:</label>
                <Input type="text" id="Address1" name="Address1" {...register("Address1",{
                    reruired:"field is required...!"
                })}/>
          </div>
           <div>
                <label htmlFor='Address2'>Permanent Address:</label>
                    <Input type="text" id="Address2" name="Address2" {...register("Address2",{
                          reruired:"field is required...!"
                           })}/>
             </div>
                </div>  
                <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <label htmlFor='email'>Email:</label>
                <Input type="text" id="email" name="email" {...register("email",{
                    reruired:"field is required...!"
                })}/>
          </div>
           <div>
                <label htmlFor='contact'>Contact:</label>
                    <Input type="number" id="contact" name="contact" {...register("contact",{
                          reruired:"field is required...!"
                           })}/>
             </div>
                    </div>     <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <label htmlFor='State'>State:</label>
                <Input type="text" id="State" name="State" {...register("State",{
                    reruired:"field is required...!"
                })}/>
          </div>
           <div>
                <label htmlFor='city'>City:</label>
                    <Input type="text" id="city" name="city" {...register("city",{
                          reruired:"field is required...!"
                           })}/>
             </div>
               </div>     <div className='grid grid-cols-2 gap-x-6'>
            <div>
                <label htmlFor='Pincode'> Pin Code:</label>
                <Input type="text" id="Pincode" name="Pincode" {...register("Pincode",{
                    reruired:"field is required...!"
                })}/>
          </div>
           <div>
                <label htmlFor='Whatsapp'> Whatsapp no:</label>
                    <Input type="text" id="Whatsapp" name="Whatsapp" {...register("Whatsapp",{
                          reruired:"field is required...!"
                           })}/>
             </div>
               </div>
     </>
              )}

        <div className='flex justify-center items-center mt-4 mb-2 gap-x-2'>
              <h1 className='text-[20px] font-semibold'>Education Details</h1>
               <AiOutlineArrowDown onClick={haandleEdu} size={25}/>
          </div>
<hr/>
          {EduShow && (
            <>
             <div className='grid grid-cols-2 gap-x-6'>
             <div>
                <label htmlFor='education'>Education:</label>
                    <Input type="text" id="education" name="education" {...register("education",{
                          reruired:"field is required...!"
                           })}/>
             </div>
            <div>
                <label htmlFor='Institute'>Institute Name:</label>
                <Input type="text" id="Institute" name="Institute" {...register("Institute",{
                    reruired:"field is required...!"
                })}/>
          </div>
          
             </div>

             <div className='grid grid-cols-2 gap-x-6'>
             <div>
                <label htmlFor='degree'>Degree:</label>
                    <Input type="text" id="degree" name="degree" {...register("degree",{
                          reruired:"field is required...!"
                           })}/>
             </div>
            <div>
                <label htmlFor='FOS'>Field Of Study:</label>
                <Input type="text" id="FOS" name="FOS" {...register("FOS",{
                    reruired:"field is required...!"
                })}/>
          </div>
          
             </div>
             <div className='grid grid-cols-2 gap-x-6'>
             <div>
                <label htmlFor='percantage'>Percentage:</label>
                    <Input type="number" id="percantage" name="percantage" {...register("percantage",{
                          reruired:"field is required...!"
                           })}/>
             </div>
            <div>
                <label htmlFor='Completed'>Completion Year:</label>
                <Input type="date" id="Completed" name="Completed" {...register("Completed",{
                    reruired:"field is required...!"
                })}/>
          </div>
          
             </div>
            </>
          )}
    <div className='my-2 flex justify-end gap-x-4'>
    <Button >Reset</Button>

        <Button className="bg-green-600" type="submit">Submit</Button>
        </div>       
        </form>
            </ModalBody>

        </Modal>
        <div className='flex justify-between m-4 '>
        <TfiAlignLeft size={25} className='cursor-pointer' onClick={()=>setFilter(true)}/>
            <Button onClick={()=>setModal(true)} className="bg-blue-800">Add</Button>
        </div>
    <Table className="mx-4 my-2">
        <TableHeader className="bg-blue-800 ">
    <TableRow>
        <TableHead className="text-center">Name</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Age</TableHead>
        <TableHead>Phone</TableHead>
        <TableHead>Position</TableHead>
        <TableHead>Action</TableHead>
    </TableRow>
</TableHeader>

<TableBody className="bg-white">
{records.map((item)=>(
<TableRow key={item.id}>
<TableCell className="flex gap-x-4 items-center">
    <img src='data:image/jpeg;base64,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'
    alt="not working" className='w-8 h-8 rounded-full '
    />
    {item.name}
    </TableCell>
<TableCell>{item.email}</TableCell>
<TableCell>{item.age}</TableCell>
<TableCell>{item.phone}</TableCell>
<TableCell>{item.position}</TableCell>
<TableCell className="flex gap-x-2">
    <FaEdit size={25} color='blue'/>  <AiFillDelete size={25} color='red'/>
</TableCell>
</TableRow>
))}


</TableBody>
    </Table>
        </div>
  )
}
