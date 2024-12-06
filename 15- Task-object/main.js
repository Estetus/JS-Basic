const toDoList = {
  tasks: [],
  id: 1,
  addTask: function (titleName, priority) {
    const newId = this.id++;
    const newTask = {
      title: titleName,
      id: newId,
      priority,
    };
    this.tasks.push(newTask);
    return newTask;
  },
  deleteTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },
  updeteTask: function (id, title, priority) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.title = title;
      task.priority = priority;
      return task;
    }
    return null;
  },

  sortTasks: function () {
    this.tasks = this.tasks.sort((a, b) => a.id < b.id);
  },
};
toDoList.addTask("Помыть посуду", 1);
toDoList.addTask("Постирать", 2);
toDoList.addTask("Сходить в магазин", 6);
toDoList.addTask("Погладить", 3);
toDoList.addTask("Прочесть книгу", 5);
toDoList.updeteTask(1, "Пропылесосить", 10);
toDoList.sortTasks();
toDoList.deleteTask(2);

console.log(toDoList.tasks);
