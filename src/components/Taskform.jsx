import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [title, setTitle] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault(); // Prevent form reload
        if (title.trim()) {
            addTask({ title }); // Call the addTask function
            console.log("Task added:", title); // Log the task title to console
            setTitle(""); // Clear the input field
        } else {
            console.log("Empty task not allowed"); // Log an error for empty input
        }
    };

    return (
        <>
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add New Task"
                />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
};

export default TaskForm;
