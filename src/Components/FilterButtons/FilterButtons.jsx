import React from "react";

const FilterButtons = ({ toDoList, completedList, allList }) => {
  return (
    <div>
      <button onClick={allList} style={{ width: "115px" }}>
        Tasks
      </button>

      <button className="m-4" onClick={toDoList} style={{ width: "115px" }}>
        ToDo
      </button>
      <button onClick={completedList} style={{ width: "115px" }}>
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
