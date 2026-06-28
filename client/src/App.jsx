import { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle2, Clock3, ListTodo } from "lucide-react";

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleComplete = async (task) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
        title: task.title,
        description: task.description,
        completed: !task.completed,
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 p-8 shadow-xl">
        <h1 className="text-5xl font-bold text-center">
          🚀 Task Tracker Pro
        </h1>

        <p className="text-center mt-3 text-lg text-gray-200">
          Manage your daily tasks efficiently
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-10 px-6">

        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
          <ListTodo size={40} className="text-blue-400" />
          <h2 className="text-3xl font-bold mt-4">
            {totalTasks}
          </h2>
          <p className="text-gray-400">
            Total Tasks
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
          <Clock3 size={40} className="text-yellow-400" />
          <h2 className="text-3xl font-bold mt-4">
            {pendingTasks}
          </h2>
          <p className="text-gray-400">
            Pending
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">
          <CheckCircle2
            size={40}
            className="text-green-400"
          />
          <h2 className="text-3xl font-bold mt-4">
            {completedTasks}
          </h2>
          <p className="text-gray-400">
            Completed
          </p>
        </div>

      </div>

      <AddTask />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />

    </div>
  );
}

export default App;