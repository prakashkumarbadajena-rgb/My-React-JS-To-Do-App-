import { useState } from "react";

function Home() {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {

    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setInput("");
  };

  const toggleTask = (id) => {

    const updated = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updated);
  };

  const deleteTask = (id) => {

    const filtered = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(filtered);
  };

  return (
    <div className="container">

      <div className="todo-container">

        <h1>To Do List</h1>

        <div className="input-section">

          <input
            type="text"
            placeholder="Add task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button onClick={addTask}>
            Add
          </button>

        </div>

        <div className="task-list">

          {tasks.map((task) => (

            <div
              key={task.id}
              className={`task-card ${
                task.completed ? "completed" : ""
              }`}
            >

              <div className="left">

                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />

                <span>{task.text}</span>

              </div>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;