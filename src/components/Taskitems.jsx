const Taskitem=({task,deleteTask,toggleCompletion})=>{
    return(
        <> 
        <li>
            <span  style={{textDecoration:task.completed ? 'line-through':'none',
            }}>
               {task.Title}
            </span>
            <button onClick={()=>toggleCompletion(task._id,task.completed)}>
                {task.completed ? 'Undo':'Complete'}
            </button>

            <button onClick={()=>deleteTask(task._id)}>Delete</button>
        </li>
        </>
    );
};

export default Taskitem;