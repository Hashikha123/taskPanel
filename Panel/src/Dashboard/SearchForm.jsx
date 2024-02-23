import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Button } from "@/components/ui/button";
import { AiOutlineClose } from "react-icons/ai";

const SearchForm = ({ onSubmit, onSearch, isOpen, toggle, searchFields }) => {
  const [searchTerms, setSearchTerms] = useState({});

  const handleSearchChange = (e, fieldName) => {
    const value = e.target.value;
    setSearchTerms(prevSearchTerms => ({
      ...prevSearchTerms,
      [fieldName]: value,
    }));
    onSearch(fieldName, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Modal size='md' isOpen={isOpen}>
      <ModalHeader className=" bg-blue-900 text-white text-lg font-semibold ">
        <div className="grid grid-cols-2">
          <div className="">Search</div>
          <div className="flex justify-end mr-0 ml-52">
            <AiOutlineClose
              fontSize={24}
              onClick={toggle} 
              className="cursor-pointer justify-end"
            />
          </div>
        </div>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          {searchFields.map((field, index) => (
            <div key={index}>
              <label htmlFor={`searchField${index}`} className="block text-sm font-medium text-gray-700">{field.label}</label>
              <Input
                // type="text"
                type={field.type}
                id={`searchField${index}`}
                placeholder={field.placeholder}
                value={searchTerms[field.name] || ''}
                onChange={(e) => handleSearchChange(e, field.name)}
                className="mb-2"
              />
            </div>
          ))}
          <div className='flex justify-end'>
            <Button type="submit" className="p-2 rounded-md text-md text-white mt-2">🔍 Search</Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default SearchForm;




