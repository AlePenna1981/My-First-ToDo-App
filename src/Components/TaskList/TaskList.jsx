import React from "react";
import { Task } from "../Task/Task";

const TaskList = ({ tasks, completeTask, deleteTask, filter }) => {
  return (
    <div>
      {filter === "all" &&
        tasks.map((task, i) => (
          <div key={i}>
            <Task
              task={task}
              completeTask={() => completeTask(i)}
              deleteTask={() => deleteTask(i)}
            />
          </div>
        ))}
      {filter === "completed" &&
        tasks
          .filter((task) => task.completed === true)
          .map((task, i) => (
            <div key={i}>
              <Task
                task={task}
                completeTask={() => completeTask(i)}
                deleteTask={() => deleteTask(i)}
              />
            </div>
          ))}
      {filter === "todo" &&
        tasks
          .filter((task) => task.completed === false)
          .map((task, i) => (
            <div key={i}>
              <Task
                task={task}
                completeTask={() => completeTask(i)}
                deleteTask={() => deleteTask(i)}
              />
            </div>
          ))}
    </div>
  );
};

export default TaskList;
