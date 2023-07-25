import React from "react";
// import { Store } from "../../store/context/AppContext";

const TaskComponent = ({ column }) => {
  // const { openModal } = Store();
  return (
    <div className="mt-3 grid grid-cols-3 gap-6 p-4">
      {column.map((item, index) => {
        const length = item.tasks.length;
        const bg =
          index === 0
            ? "bg-green-500"
            : index === 1
            ? "bg-red-500"
            : "bg-yellow-500";
        return (
          <div key={index}>
            <div className="flex items-center">
              <div className={`${bg} h-4 w-4 rounded-full`}></div>
              <p className="ml-1 py-2 text-sm font-bold tracking-widest text-[#828fa3]">{`${item.name}(${length})`}</p>
            </div>
            <div>
              {item.tasks.map((task, index) => {
                const { title, subtasks } = task;
                const count = task.subtasks.filter(
                  (item) => item.isCompleted === true
                );
                return (
                  <div
                    className="task mb-7 h-max w-[300px] md:w-[310px] rounded-md p-4 shadow-md hover:text-[#635fc7] "
                    key={index}>
                    <p className="text-sm font-bold tracking-widest">
                      {title}
                    </p>
                    <p className="mt-2 text-xs font-bold tracking-widest  text-[#828fa3]">
                      {count.length} of {subtasks.length} subtasks
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskComponent;
