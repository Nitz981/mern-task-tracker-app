import { Trash2, CheckCircle } from "lucide-react";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  if (tasks.length === 0) {
    return (
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <div className="bg-slate-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            📋 No Tasks Found
          </h2>

          <p className="text-gray-400 mt-2">
            Add your first task above.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-10 px-6 mb-10">
      <h2 className="text-3xl font-bold text-white mb-6">
        📋 Your Tasks
      </h2>

      <div className="grid gap-5">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="bg-slate-800 rounded-2xl shadow-lg p-5 flex justify-between items-center hover:bg-slate-700 transition"
          >
            <div>
              <h3 className="text-xl font-bold text-white">
                {task.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {task.description}
              </p>

              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-semibold ${
                  task.completed
                    ? "bg-green-600 text-white"
                    : "bg-yellow-500 text-black"
                }`}
              >
                {task.completed ? "Completed" : "Pending"}
              </span>
            </div>

            <div className="flex gap-3">

              <button
                onClick={() => toggleComplete(task)}
                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg"
              >
                <CheckCircle size={20} />
              </button>

              <button
                onClick={() => deleteTask(task._id)}
                className="bg-red-600 hover:bg-red-700 p-3 rounded-lg"
              >
                <Trash2 size={20} />
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;