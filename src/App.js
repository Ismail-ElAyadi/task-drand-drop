import React , {useState}from 'react';
import initialData from './initial-data'
import Column from './components/Column'
function App() {
const [data,setData] = useState(initialData)
console.log( );
  return (
    data.columnOrder.map(columnID => {
      const column = data.columns[columnID]
      const tasks = column.taskIds.map(
        (taskId => {
        return data.tasks[taskId]
      })
      )
      return <Column key= {column.id} column={column} tasks= {tasks}/>
    })
  )
  }


export default App;
