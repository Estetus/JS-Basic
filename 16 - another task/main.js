const toDoList = {
  tasks: [],
  id: 1,
  description: '',
  order: 0,
  addTask: function (titleName, priority, descr) {
    const newId = this.id++;
    const newOrder = this.order++;
    const newTask = {
      title: titleName,
      id: newId,
      priority,
      order: newOrder,
      description: descr
    };
    this.tasks.push(newTask);
    return newTask;
  },
  deleteTask: function (id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.tasks.forEach((task, i) => {
      task.id = i + 1;
      task.order = i + 1;
    })
  },
  updateTask: function (id, title, priority, descr) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.title = title;
      task.priority = priority;
      task.description = descr;
      return task;
    }
    return null;
  },

  sortTasks: function () {
    this.tasks = this.tasks.sort((a, b) => a.id < b.id);
  },
};
toDoList.addTask("Помыть посуду", 1, "Это далось мне очень тяжело");
toDoList.addTask("Постирать", 2, 'Из последних сил');
toDoList.addTask("Сходить в магазин", 6, 'С ненавистью и превозмогая усталось');
toDoList.addTask("Погладить", 3, 'Все как в тумане');
toDoList.addTask("Прочесть книгу", 5, 'Хватило на целых 5 мин');
toDoList.updateTask(1, "Пропылесосить", 10, 'Было лучше');
toDoList.sortTasks();
toDoList.deleteTask(2);

console.log(toDoList.tasks);
