let taskID = 0;
export const addTodo = text => {
  return { type: "ADD_TODO", text, id: taskID++ };
};
export const deleteTodo = id => {
  return { type: "DELETE_TODO", id};
};
