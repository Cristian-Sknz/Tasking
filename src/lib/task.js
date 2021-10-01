import APPStorage from "./storage";
import data from "../data/data.json";
import moment from "moment";
import Category from "./category";

class TaskManager {

  static _observers = [];

  static async getLoadedTasks() {
    const tasks = await this.getTasks()
    return tasks.map((task) => this.toStorageTask(task));
  }

  static async getTasks() {
    try {
      return JSON.parse(await APPStorage.get('tasks'));
    } catch {
      return getUpdatedJson();
    }
  }

  static async getById(taskId) {
    const tasks = await this.getTasks();
    return tasks.filter((task) => task.id === taskId)[0];
  }

  static async hasById(taskId) {
    return await this.getById(taskId) !== undefined;
  }

  static async save(task) {
    return new Promise(async (resolve) => {
      let tasks = await this.getTasks();
      if (await this.hasById(task.id)) {
        this.storageAll(tasks.map((t) => (t.id === task.id) ? task : t));
        resolve(task);
      } else {
        task.id = await this.nextId();
        tasks.push(task);
        this.storageAll(tasks);
        resolve(tasks);
      }
    }).then((tasks) => this.notify(tasks));
  }

  static async delete(task) {
    return this.getTasks().then(async (tasks) => {
      let id = (task instanceof Number) ? task : task.id;
      if (await this.hasById(id)) {
        this.storageAll(tasks.filter((task) => task.id !== id));
        return true;
      }
      return false;
    }).then((del) => this.notify(del));
  }

  static notify(ret) {
    TaskManager.getLoadedTasks()
      .then((tasks) => TaskManager._observers.forEach((func) => {
        func(tasks);
      }));
    return ret;
  }

  static async register(func) {
    this._observers.push(func);
  }

  static async unregister(func) {
    return this._observers = this._observers.filter((f) => f === func);
  }

  static toStorageTask(task) {
    return new StorageTask(task);
  }

  static async storageAll(tasks) {
    return APPStorage.set('tasks', JSON.stringify(tasks));
  }

  static async nextId() {
      return await APPStorage.get('nextId')
        .then((num) => APPStorage.set('nextId', parseInt(num) + 1))
        .catch(() => APPStorage.set('nextId', 4));
  }
}

class StorageTask {
  
  constructor({ id, title, category, createdDate, dateTime, hours }) {
    this.id = id;
    this.title = title;
    this.category = Category.getById(category);
    this.createdDate = moment(createdDate);
    this.dateTime = moment(dateTime);
    this.time = hours.split(':');
    this.hours = this.dateTime.clone().add(this.time[0], "h").add(this.time[1], "m");
    this.duration = null;
  }

  get state() {
    if (this.isExpired()) {
      return ['complete', 'Finalizado'];
    }
    if (this.isActive()) {
      return ['active', 'Ativo'];
    }
    return ['scheduled', 'Agendado'];
  }

  isScheduled() {
    return this.dateTime - moment() > 0;
  }

  isActive() {
    return this.dateTime - moment() <= 0 && !this.isExpired();
  }

  isExpired() {
    return this.hours - moment() <= 0;
  }

  getDateAgo(){
    return moment.duration(this.createdDate - moment(), 'milliseconds');
  }

  getDuration() {
    if (!this.duration) {
      this.duration = new TaskDuration(this);
    }
    return this.isScheduled()
      ? this.duration.scheduleDuration()
      : this.isActive()
      ? this.duration.activeDuration()
      : null;
  }

  getTimerString() {
      if (this.getDuration() == null){
          return this.hours.format('DD/MM - HH:mm')
      }
      let duration = this.getDuration();
      if(duration.hours() !== 0) {
        return `${duration.hours()}h${duration.minutes()}m`
      }
      
      return `${duration.minutes()}m`
  }

  delete() {
    TaskManager.delete(this);
  }

  toTask() {
    return {
      id: this.id,
      title: this.title,
      category: this.category.id,
      createdDate: this.createdDate.toISOString(),
      dateTime: this.dateTime.toISOString(),
      hours: `${this.time[0]}:${this.time[1]}`
    }
  }

  getFixedTime() {
    if (!this.time[0] || !this.time[1]){
      return '01:00';
    }
    return `${this.time[0]}:${this.time[1]}`;
  }
}

class TaskDuration {
  constructor({ dateTime, hours }) {
    this.scheduleDuration = () => moment.duration(
      dateTime - moment(),
      "milliseconds"
    );
    this.activeDuration = () => moment.duration(hours - moment(), "milliseconds");
  }
}

function getUpdatedJson() {
    return data.map((value, index) => {
      value.createdDate = moment().toISOString();
      value.dateTime = moment().add((index + 1) + 2, 'hours').toISOString();
      return value;
    });
}

export default TaskManager;
