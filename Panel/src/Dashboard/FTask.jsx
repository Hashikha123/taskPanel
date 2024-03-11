import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MdBookmarkAdded } from 'react-icons/md';

function FTask() {
  const taskData = [
    { name: 'Task 1', status: 'ongoing' , empName: 'Pihu'},
    { name: 'Task 2', status: 'started' , empName: 'Riya'},
    { name: 'Task 3', status: 'completed', empName: 'ABC' },
    { name: 'Task 4', status: 'pending', empName: 'Vanshika' },
    { name: 'Task 5', status: 'started', empName: 'XYZ' },
    { name: 'Task 6', status: 'completed', empName: 'Haseen' },
    { name: 'Task 7', status: 'ongoing', empName: 'John Deo'},
    { name: 'Task 9', status: 'ongoing', empName: 'Komal'},
   
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 m-4 gap-x-2 gap-y-2">
        {taskData.map((task, index) => (
          <div key={index}>
            <Card className="bg-white p-2 mt-2 h-[110px] ">
              <CardTitle className="text-md mx-3 ml-2">
                <MdBookmarkAdded size={32} color="orange" />
              </CardTitle>
              <CardContent className="grid grid-cols-3 space-x-3 ">
                <div>
                  <p className="text-[18px] font-semibold mx-1">{task.name}</p>
                  <p className="text-[17px] font-semibold mx-1">{task.empName}</p>
                </div>
                <div className="flex justify-end items-center gap-x-2">
                  <Button className="bg-blue-800 p-2 shadow-md shadow-gray-700">View</Button>
                </div>
                <div className="flex justify-center items-center">
                  {task.status === 'ongoing' && (
                    <Button className="bg-orange-600 p-1 shadow-md shadow-gray-500">On going</Button>
                  )}
                  {task.status === 'started' && (
                    <Button className="bg-pink-600 p-1 shadow-md shadow-gray-500">Started</Button>
                  )}
                  {task.status === 'completed' && (
                    <Button className="bg-green-700 p-1 shadow-md shadow-gray-500">Completed</Button>
                  )}
                    {task.status === 'pending' && (
                    <Button className="bg-red-600 p-1 shadow-md shadow-gray-500">Pending</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FTask;

