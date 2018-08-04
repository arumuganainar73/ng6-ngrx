import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/Rx'; this will load all features
@Injectable()
export class TaskComponentService {
  base_url = 'http://mybackend.com/api/';
  tasks_endpoint = 'tasks';
  constructor(private http: Http) {}

  // Gets all tasks
  getTasks() {
    return this.http
      .get(this.base_url + this.tasks_endpoint);
  } // getTasks

  // Creates a task
  createTask(task) {
    return this.http
      .post(this.base_url + this.tasks_endpoint, task);
  } // createTask

  // Updates a Task
  updateTask(update) {
    return this.http
      .put(this.base_url + this.tasks_endpoint, update);
  } // updateTask

  // Deletes a Task
  deleteTask(taskId) {
    return this.http
      .delete(`${this.base_url + this.tasks_endpoint}/${taskId}`);
  } // deleteTask
}
