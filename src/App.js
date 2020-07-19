import React, { useState } from "react";
import initialData from "./initial-data";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
function App() {
  const [data, setData] = useState(initialData);
  const onDragEnd = result => {
    // TODO: REORDER OUR COLUMN
    console.log(result);
    const {destination,source,draggableId} = result
    if(destination.droppableId === source.droppableId && destination.index === source.index){
      // no change to record cause same column, same index
      return;
    }

    const column = data.columns[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)

    // delete the task in the Array
    newTaskIds.splice(source.index,1)
    // to remove it in this Index position
    newTaskIds.splice(destination.index,0,draggableId)

    const newColumn = {
      ...column,
      taskIds:newTaskIds
    }

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id] : newColumn,
      }
    }
    setData(newState)
  }

  return(
  <DragDropContext
  onDragEnd = {onDragEnd}
  >
    {
      data.columnOrder.map((columnID) => {
        const column = data.columns[columnID];
        const tasks = column.taskIds.map((taskId) => {
          return data.tasks[taskId];
        });
        return <Column key={column.id} column={column} tasks={tasks} />;
      })
    }
  </DragDropContext>
  )
}

export default App;
