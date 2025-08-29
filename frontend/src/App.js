import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API ?? 'http://localhost:4000/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const result = await axios.get(`${API_URL}/tasks`);
      setTasks(result.data);
    };
    fetchTasks();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    const res = await axios.post(`${API_URL}/tasks`, { title: newTask });
    setTasks([...tasks, res.data]);
    setNewTask('');
  };

  const handleStatusChange = async (id, status) => {
    const res = await axios.put(`${API_URL}/tasks/${id}`, { status });
    setTasks(tasks.map(task => (task.id === id ? res.data : task)));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
        <form onSubmit={handleCreateTask}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New task..."
          />
          <button type="submit">Add new task</button>
        </form>
        <div className="task-container">
          {tasks.map(task => (
            <div key={task.id} className={`task-card ${task.status}`}>
              <p>{task.description}</p>
              <select
                value={task.status}
                onChange={(e) => handleStatusChange(task.id, e.target.value)}
              >
                <option value="pendiente">Pending</option>
                <option value="completada">Completed</option>
              </select>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;