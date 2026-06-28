import { useState } from "react";
import axios from "axios";

function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://mern-task-tracker-api-v01o.onrender.com/api/tasks",
        {
          title,
          description,
        }
      );

      console.log(res.data);
      alert("✅ Task Added Successfully");

      setTitle("");
      setDescription("");
    } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.response?.data);

  alert("❌ Failed to Add Task");
}
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-5">
        ➕ Add New Task
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-700 text-white mb-4 outline-none"
          required
        />

        <textarea
          placeholder="Enter Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          className="w-full p-3 rounded-lg bg-slate-700 text-white mb-4 outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;