import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      day: "March 8th at 2:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Task 2",
      day: "March 9th at 2:30",
      reminder: true,
    },
    {
      id: 3,
      text: "Task 3",
      day: "March 11th at 2:30",
      reminder: false,
    },
    {
      id: 4,
      text: "happy Birthday to me",
      day: "March 12th at 2:30",
      reminder: false,
    },
  ]);

  const toggleReminder =(id) =>{
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder}:task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
  };

  const addTask = (task) =>{
    const id = Math.floor(Math.random()* 10000) + 1
    const newTask = { id, ...task }
    console.log(newTask)
    setTasks([...tasks, newTask])
  };

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>
      {showAddTask && 
        <AddTask 
          onAdd={addTask}
        />
      }
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        "No Todo's - Have a great day!"
      )}
    </div>
  );
};

export default App;
