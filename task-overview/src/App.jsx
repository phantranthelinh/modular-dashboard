import React, { useState } from "react";

import { CalendarDays, CirclePlus, Search, X } from "lucide-react";
import "./index.scss";
import { cn } from "./lib/utils";
import { determineTaskStatus, getPersonInitials } from "./utils";
import { inititalTasks } from "./constants/data";


const App = () => {

  const [taskSelected, setTaskSelected] = useState(null)

  return (
    <div className='h-full w-full'>
      <div className='flex flex-row '>
        <div className='flex-1 flex flex-col  px-8 py-12'>
          <h4 className='text-2xl font-bold text-color-primary'>
            Task overview
          </h4>
          <SearchForm />
          <TaskList setTaskSelected={setTaskSelected} />
          <div className='mt-20'>
            <li
              className='flex cursor-pointer items-center gap-2  p-4 bg-white border border-gray-200 rounded-lg shadow   '
            >
              <CirclePlus className='text-zinc-600' />
              <input
                type='text'
                placeholder='Add a task'
                className='outline-none flex-1'
              />
              <span>
                <CalendarDays />
              </span>
            </li>
          </div>
        </div>
        <TaskDetail task={taskSelected} setTaskSelected={setTaskSelected} />
      </div>
    </div>
  );
};

const TaskDetail = ({ task, setTaskSelected }) => {
  return (
    task && <div className='w-80 h-screen bg-white shadow-lg hidden md:block'>
      <div className="flex justify-end items-center">
        <button onClick={() => setTaskSelected(null)} className="p-4 ">
          <X />
        </button>
      </div>

      <div className="flex flex-col p-4 gap-4">
        <span>{task.title}</span>
        <div class="relative max-w-sm">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input datepicker id="default-datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="Due date" />
        </div>
      </div>
    </div>
  )
}

const SearchForm = () => {
  return (
    <form className='max-w-md mt-4 mb-6'>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only '
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <Search className='text-zinc-400' />
        </div>
        <input
          type='search'
          className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  outline-none'
          placeholder='Search task name'
          required
        />
        <button
          type='submit'
          className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 '
        >
          Search
        </button>
      </div>
    </form>
  )
}

const TaskList = ({ setTaskSelected }) => {


  const handleClick = (task) => {
    setTaskSelected(task)
  }
  return (
    <>
      <div className='h-[400px] overflow-y-auto'>
        <ul className='flex flex-col gap-2'>
          {inititalTasks.map((task) => {

            // Map over assigned persons and get their initials
            const formattedAssignedPerson = task.assigned_person.map((person) => {
              return getPersonInitials(person.name)
            })

            return (
              <li
                onClick={() => handleClick(task)}
                key={task.id}
                className='flex justify-between items-center   p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100  '
              >
                <div class='flex-1 flex items-center '>
                  <input
                    type='checkbox'
                    className='w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 '
                  />
                  <label
                    htmlFor='checked-checkbox'
                    className='ms-2 text-sm font-medium text-gray-900 '
                  >
                    {task.title}
                  </label>
                </div>
                <div className='flex-1 flex justify-between items-center'>
                  <span
                    className={cn(
                      "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ",

                      {
                        "bg-green-100 text-green-800":
                          task.status.isCompleted,
                        "bg-primary-100 text-primary-700": task.status.isProcess,
                        "bg-rose-100 text-rose-700": task.status.isPending

                      }
                    )}
                  >
                    {determineTaskStatus(task.status)}
                  </span>

                  <span className='flex items-center gap-[2px] '>
                    <CalendarDays className='text-zinc-700 h-4 w-4' />
                    <span className='text-xs text-zinc-500'>
                      {task.due_date}
                    </span>
                  </span>
                  <div className="flex -space-x-4 rtl:space-x-reverse">
                    {formattedAssignedPerson.map((person, index) => {
                      return (
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-primary-600 rounded-full shadow-md ">
                          <span className="font-medium text-white ">{`${person}`}</span>
                        </div>
                      )
                    })}
                  </div>

                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
