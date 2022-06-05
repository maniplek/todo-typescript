import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';


import { ITask } from './InterfaceTask';




const App:FC = () =>{

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadLine] = useState<number>(1);
  const [allTask, setAllTask] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>{
    if(e.target.name ==='task'){
      setTask(e.target.value);
    }else{
      setDeadLine(Number(e.target.value));
    }
  }


  const addTask = ():void =>{
    const newTask = {taskName: task, deadline: deadline}
   setAllTask([...allTask, newTask]);
  
   setTask('');
   setDeadLine(0);
   console.log(allTask);
  }

  const completedTask = (taskToBeDeleted:string): void =>{
    setAllTask(allTask.filter((task)=>(task.taskName !== taskToBeDeleted)));
  }


  return (
    <div className="container flex flex-col items-center  m-10 gap-9">
        <h3 className='text-3xl text-green-500 font-bold '>TODO APP </h3>
      <div className='flex gap-5'>
        <input className='border-2 border-green-600' type='text' name='task' onChange={handleChange} value={task} placeholder='Enter your Task'/>
        <input className='border-2 border-green-600' type='number' name='deadline' onChange={handleChange} value={deadline} placeholder='Enter your deadline'/>
        <button className='border-2 border-green-600 bg-green-500 text-white' onClick={addTask}>Add Task</button>
      </div>
      <div >
        <h3 className='text-xl font-semibold text-green-500'>TODO LIST</h3>
        {
          allTask.map((task: ITask, key:number)=>(
            <TodoList key={key} task={task} completedTask={completedTask} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
