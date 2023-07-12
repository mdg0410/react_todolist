const saveStorage = (todos) => {
  localStorage.setItem('tasksReact', JSON.stringify(todos));
};

export default saveStorage;
