const initialData = {
  tasks: {
    "taskID-1": { id: "taskID-1", content: "task one to do " },
    "taskID-2": { id: "taskID-2", content: "task two  to do " },
    "taskID-3": { id: "taskID-3", content: "task three to do " },
    "taskID-4": { id: "taskID-4", content: "task four  to do " },
    "taskID-5": { id: "taskID-5", content: "task five to do " },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "to do",
      taskIds: ["taskID-1", "taskID-2", "taskID-3", "taskID-4", "taskID-5"],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1'],
};

export default initialData