import Taskitem from "./Taskitems";

const Tasklist=({tasks,deleteTask,toggleCompletion})=>{
    return(
        <>
        <ul>
            {tasks.map((task)=>(
                <Taskitem
                key={task._id}
                task={task}
                deleteTask={deleteTask}
                toggleCompletion={toggleCompletion}
                />

           ) )}
        </ul>
        </>
    );

};

export default Tasklist;