import { CalendarDays } from "lucide-react";
import React from "react";
import { cn } from "../lib/utils";

const initialTask = new Array(30).fill(0).map((item, index) => ({
  id: index + 1,
  title: `Task ${index + 1}`,
  assigned_person: "Phan Tran The Linh",
  due_date: "2024-7-24",
  status: "completed",
}));

const TaskList = () => {
  return (
    <>
      <div className='h-[400px] overflow-y-auto'>
        <ul className='flex flex-col gap-2'>
          {initialTask.map((task) => {
            return (
              <li
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
                          task.status === "completed",
                      }
                    )}
                  > 
                    {task.status}
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
    </>
  );
};

export default TaskList;
