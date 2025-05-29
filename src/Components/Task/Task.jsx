export const Task = ({ task, completeTask, deleteTask }) => {
  return (
    <div className="d-flex align-items-center">
      <h4 className="m-2">{task.task}</h4>
      <div className="ms-auto d-flex align-items-center m-2">
        {task.completed && (
          <span className="badge bg-success me-2">Completed</span>
        )}
        <button className="btn btn-primary me-2" onClick={completeTask}>
          Complete
        </button>
        <button className="btn btn-danger" onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
};
