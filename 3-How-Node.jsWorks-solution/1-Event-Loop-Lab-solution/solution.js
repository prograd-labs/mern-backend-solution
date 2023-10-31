class Task {
    constructor(name) {
        this.name = name;
    }
}
class TaskScheduler {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }

    showTasks() {
        this.tasks.forEach((task,ind) => {
            setTimeout(() => {
                console.log(task.name);
            },(ind+1)*1000);
        })
    }
}
console.log("PREPARING TASKS")
const myTask = new TaskScheduler();
myTask.addTask(new Task('watching netflix'));
myTask.addTask(new Task('Go for walk'))
myTask.addTask(new Task('Prepare assignments of DBMS'));

myTask.showTasks();

console.log("TASKS ENDED.")

