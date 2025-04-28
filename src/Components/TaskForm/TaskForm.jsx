import React, { useState, useEffect } from "react";
import TaskList from "../TaskList/TaskList";
import FilterButtons from "../FilterButtons/FilterButtons";

const TaskForm = () => {
  //
  const [task, setTask] = useState("");
  const completed = false;
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const datosFromStorage = localStorage.getItem("tasksKey");
    if (datosFromStorage) {
      setTasks(JSON.parse(datosFromStorage));
    }
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (task) {
      const taskFlag = [...tasks, { task, completed }];
      setTasks(taskFlag);
      localStorage.setItem("tasksKey", JSON.stringify(taskFlag));
      console.log(taskFlag);
      setTask("");
    }
  };

  const completeTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((t, i) =>
        i === index
          ? t.completed === false
            ? { ...t, completed: true }
            : { ...t, completed: false }
          : t
      )
    );
  };

  const deleteTask = (index) => {
    const arrayFlag = tasks.filter((_, i) => i !== index);
    setTasks(arrayFlag);
    localStorage.setItem("tasksKey", JSON.stringify(arrayFlag));
    if (arrayFlag.length < 1) {
      localStorage.removeItem("tasksKey");
    }
  };

  const toDoList = () => {
    setFilter("todo");
  };
  const completedList = () => {
    setFilter("completed");
  };
  const allList = () => {
    setFilter("all");
  };

  return (
    <>
      <div>
        <form onSubmit={addTask}>
          <label>
            <h2>Add Task</h2>
            <input
              type="text"
              placeholder="task"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
          </label>
          <button type="submit" className="m-3">
            Add Task
          </button>
        </form>
      </div>
      <hr />
      <FilterButtons
        toDoList={toDoList}
        completedList={completedList}
        allList={allList}
      />
      <hr />
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
        filter={filter}
      />
    </>
  );
};

export default TaskForm;
