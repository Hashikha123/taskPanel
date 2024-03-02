import React from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { MdBookmarkAdded } from "react-icons/md";

function EmpTask() {
  const taskData = [
    { name: 'Task 1' },
    { name: 'Task 2' },
    { name: 'Task 3' },
    { name: 'Task 4' },
    { name: 'Task 5' }

  ];

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-x-2 gap-y-2'>
        {taskData.map((task, index) => (
          <div key={index}>
            <Card className="bg-white p-2 h-[100px] ">
              <CardTitle className="text-md mx-3 ml-2"> <MdBookmarkAdded size={32} color='green'/></CardTitle>
              <CardContent className="grid grid-cols-3 space-x-3 "> 
                <div>
                  <p className='text-[16px] font-semibold mx-1'>{task.name}</p>
                </div>
                <div className='flex justify-end items-end gap-x-3'>
                  <Button className='bg-blue-700 p-2 shadow-md shadow-gray-700'>View</Button>
                </div>
                <div className='flex justify-end items-end '>
                  <Button className='bg-orange-500 p-1 shadow-md shadow-gray-500'>On going</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmpTask;
