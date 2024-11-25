import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/Taskform';
import TaskList from './components/Tasklist';
import { getTasks, createTask, deleteTask, toggleTaskCompletion } from './api';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null); // State to track errors

    // Fetch tasks from the backend when the component is mounted
    useEffect(() => {
        const fetchTasks = async () => {
            
            try {
                const tasksFromBackend = await getTasks(); // Get tasks from backend
                setTasks(tasksFromBackend); // Set the tasks in state
                setError(null); // Clear any previous errors
            } catch (error) {
                console.error("Error fetching tasks:", error); // Handle error
                setError("Failed to fetch tasks. Please try again later.");
            }
        };

        fetchTasks();
    }, []); // Empty dependency array ensures it runs only once when the component is mounted

    const addTask = async (task) => {
        console.log("Adding task:", task); 
        try {
            const newTask = await createTask({Title: task.title }); // Call the API to create the task
            setTasks([...tasks, newTask]); // Update the state with the new task
            console.log("Task added successfully:", newTask);
            setError(null);
        } catch (error) {
            console.error("Error adding task:", error);
            setError("Failed to add task. Please try again.");
        }
    };

    const removeTask = async (id) => {
        try {
            await deleteTask(id); // Call the API to delete the task
            setTasks(tasks.filter((task) => task._id !== id)); // Remove the deleted task from state
            console.log(`Task with id ${id} deleted successfully.`);
            setError(null);
        } catch (error) {
            console.error("Error deleting task:", error);
            setError("Failed to delete task. Please try again.");
        }
    };

    const toggleCompletion = async (id, currentStatus) => {
        try {
            const newStatus = !currentStatus;  // Toggle the current completion status
            const updatedTask = await toggleTaskCompletion(id, newStatus);  // Send the new status to backend
            setTasks(
                tasks.map((task) =>
                    task._id === id ? { ...task, completed: updatedTask.Completed } : task
                )
            );
            console.log(`Task with id ${id} updated successfully.`);
            setError(null);
        } catch (error) {
            console.error("Error updating task:", error);
            setError("Failed to update task. Please try again.");
        }
    };
    
    

    return (
        <div>
            <Header />
            <TaskForm addTask={addTask} />
            <TaskList 
            tasks={tasks} 
            deleteTask={removeTask} 
            toggleCompletion={toggleCompletion} 
            />
            {/* Error message display */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default App;
