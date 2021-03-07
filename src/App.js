import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Task 1',
        day: 'March 8th at 2:30',
        reminder: true,
      },
      {
        id: 2,
        text: 'Task 2',
        day: 'March 9th at 2:30',
        reminder: true,
      },
      {
        id: 3,
        text: 'Task 3',
        day: 'March 11th at 2:30',
        reminder: true,
      },
      {
        id: 4,
        text: 'happy Birthday to me',
        day: 'March 12th at 2:30',
        reminder: true,
      }
    ]
  )
  return (
    <div className='container'>
      <Header title='Task Tracker!' />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
