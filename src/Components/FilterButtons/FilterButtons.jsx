const FilterButtons = ({ toDoList, completedList, allList, filter }) => {
  return (
    <div className="buttonBox">
      <button
        onClick={allList}
        className={`buttonTasks ${filter === "all" ? "activeBtn" : ""}`}
      >
        Tasks
      </button>
      <button
        onClick={toDoList}
        className={`buttonTodo ${filter === "todo" ? "activeBtn" : ""}`}
      >
        ToDo
      </button>
      <button
        onClick={completedList}
        className={`buttonCompleted ${
          filter === "completed" ? "activeBtn" : ""
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
