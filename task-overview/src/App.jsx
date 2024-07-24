import React from "react";

import "./index.scss";
import { CalendarDays, CirclePlus, Search } from "lucide-react";
import { cn } from "./lib/utils";
const initialTask = new Array(30).fill(0).map((item, index) => ({
  id: index + 1,
  title: `Task ${index + 1}`,
  assigned_person: "Phan Tran The Linh",
  due_date: "2024-7-24",
  status: "completed",
}));

const App = () => {
  return (
    <div className='h-full w-full'>
      <h4 className='text-xl font-bold text-color-primary'>Task overview</h4>
      <form className='max-w-md mt-4 mb-6'>
        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <Search className='text-zinc-400' />
          </div>
          <input
            type='search'
            className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none'
            placeHolder='Search task name'
            required
          />
          <button
            type='submit'
            className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Search
          </button>
        </div>
      </form>
      <div className='h-[400px] overflow-y-auto'>
        <ul className='flex flex-col gap-2'>
          {initialTask.map((task) => {
            return (
              <li
                key={task.id}
                className='flex justify-between items-center   p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 '
              >
                <div class='flex-1 flex items-center '>
                  <input
                    type='checkbox'
                    className='w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    htmlFor='checked-checkbox'
                    className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    {task.title}
                  </label>
                </div>
                <div className='flex-1 flex justify-between items-center'>
                  <span
                    className={cn(
                      " py-[3px] px-[2px]  ",
                      task.status === "completed"
                        ? "bg-green-200"
                        : "bg-rose-200"
                    )}
                  >
                    <span
                      className={cn(
                        "font-bold text-sm ",
                        task.status === "completed"
                          ? "text-green-700"
                          : "text-rose-700"
                      )}
                    >
                      {task.status}
                    </span>
                  </span>
                  <span className='flex items-center gap-[2px] '>
                    <CalendarDays className='text-zinc-700 h-4 w-4' />
                    <span className='text-xs text-zinc-500'>
                      {task.due_date}
                    </span>
                  </span>
                  <span>{task.assigned_person}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='mt-20'>
        <li data-modal-target="default-modal" data-modal-toggle="default-modal" className='flex cursor-pointer items-center gap-2  p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 '>
          <CirclePlus className='text-zinc-600' />
          <span>Add a Task</span>
        </li>
      </div>

      <div
        id='default-modal'
        tabindex='-1'
        aria-hidden='true'
        className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative p-4 w-full max-w-2xl max-h-full'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Terms of Service
              </h3>
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='default-modal'
              >
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>
            <div className='p-4 md:p-5 space-y-4'>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                With less than a month to go behtmlFore the European Union
                enacts new consumer privacy laws for its citizens, companies
                around the world are updating their terms of service agreements
                to comply.
              </p>
              <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            <div className='flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600'>
              <button
                data-modal-hide='default-modal'
                type='button'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                I accept
              </button>
              <button
                data-modal-hide='default-modal'
                type='button'
                className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
