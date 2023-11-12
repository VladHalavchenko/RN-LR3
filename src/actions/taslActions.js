export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const addTask = (task) => ({
  type: ADD_CONTACT,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_CONTACT,
  payload: taskId,
});
