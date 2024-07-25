import React, { useState } from "react";

import { CirclePlus } from "lucide-react";
import SearchForm from "./components/SearchForm";
import "./index.scss";
import TaskList from "./components/TaskList";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='h-full w-full'>
      <div className='flex flex-row '>
        <div className='flex-1 px-8'>
          <h4 className='text-xl font-bold text-color-primary'>
            Task overview
          </h4>
          <SearchForm />
          <TaskList />
          <div className='mt-20'>
            <li
              onClick={() => setShowModal((prevState) => !prevState)}
              className='flex cursor-pointer items-center gap-2  p-4 bg-white border border-gray-200 rounded-lg shadow   '
            >
              <CirclePlus className='text-zinc-600' />
              <input
                type='text'
                placeholder='Add a task'
                className='outline-none flex-1'
              />
              <span>
                
              </span>
            </li>
          </div>
        </div>
        {showModal && <div className='w-80 h-screen bg-zinc-100 '></div>}
      </div>
    </div>
  );
};

export default App;
