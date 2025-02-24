import React, { useState } from "react";
import "../css/TaskFormModel.css";

const TaskFormModal = ({ setTasks, onClose }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [dueTime, setDueTime] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleAddTask = () => {
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      details,
      dueDate,
      dueTime,
      priority,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    onClose(); // Close modal after adding task
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Create a new...</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>

        <div className="modal-body">
          <input 
            type="text" 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            maxLength={100}
          />

          <textarea 
            placeholder="Details (Optional):" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} 
            maxLength={500}
          ></textarea>

          <div className="date-time-section">
            <label>Due Date:</label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

            <label>Due Time (Optional):</label>
            <input type="time" value={dueTime} onChange={(e) => setDueTime(e.target.value)} />
          </div>

          <div className="priority-section">
            <label>Priority:</label>
            <div className="priority-container">
              <div className="priority-options">
                <button className={priority === "Low" ? "active low" : "low"} onClick={() => setPriority("Low")}>Low</button>
                <button className={priority === "Medium" ? "active medium" : "medium"} onClick={() => setPriority("Medium")}>Medium</button>
                <button className={priority === "High" ? "active high" : "high"} onClick={() => setPriority("High")}>High</button>
              </div>
              
              {/* Add Task Button Inside the Priority Block */}
              <button className="add-task-btn" onClick={handleAddTask}>Add Task</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default TaskFormModal;
