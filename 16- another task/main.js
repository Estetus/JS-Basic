const toDoList = {
  tasks: [],
  id: 1,
  addTask: function (titleName, priority) {
    const newTask = {
      id: this.id++,
      title: titleName,
      priority,
    };
    this.tasks.push(newTask);
    return newTask;
  },
  deleteTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },

  updateTask: function (id, title, priority) {
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
// toDoList.addTask("Помыть посуду", 1);
// toDoList.addTask("Постирать", 2);
// toDoList.addTask("Сходить в магазин", 6);
// toDoList.addTask("Погладить", 3);
// toDoList.addTask("Прочесть книгу", 5);
// toDoList.updateTask(1, "Пропылесосить", 10);
// toDoList.sortTasks();
// toDoList.deleteTask(2);

// console.log(toDoList.tasks);

const newToDoList = {
  tasks: [],
  id: 1,
  description: "",
  order: 0,
};

function addDescriptionAndOrder(titleName, priority, description, order) {
  const newTask = toDoList.addTask.call(newToDoList, titleName, priority);
  newTask.description = description;
  newTask.order = order;
  return newTask;
}

function updateDescriptionAndTitle(id, titleName, description, priority) {
  const newTask = toDoList.updateTask.call(newToDoList, id, titleName, priority);
  newTask.description = description;
  return newTask;
}

newToDoList.sortTasks = toDoList.sortTasks;
newToDoList.deleteTask = toDoList.deleteTask;

addDescriptionAndOrder("Постирать", 2, "Из последних сил", 2);
addDescriptionAndOrder("Помыть посуду", 1, "Перенести на завтра", 1);
addDescriptionAndOrder("Сходить в магазин", 10, "Обязательно сегодня", 3);
addDescriptionAndOrder("Погладить", 4, "Завтра");
newToDoList.sortTasks();
updateDescriptionAndTitle(1, "Пропылесосить", "Было лучше", 4);
newToDoList.deleteTask(2);

console.log(newToDoList.tasks);
