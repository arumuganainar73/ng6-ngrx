import { Component, OnInit } from '@angular/core';
import { TaskComponentService } from './task-comp.service';


export interface TaskEdit {
  id: number;
  description: string;
}


@Component({
  selector: 'app-task-comp',
  templateUrl: './task-comp.component.html',
  styleUrls: ['./task-comp.component.css']
})
export class TaskCompComponent implements OnInit {


  tasks: any[] = [];
  myTask: string;
  taskEdit: TaskEdit;
  editMode = false;
  loading = false;
  constructor(private appservice: TaskComponentService) { }

  ngOnInit() {
    this.getAllTasks();
  } // ngOnInit
  getAllTasks() {
    this.appservice.getTasks().subscribe((data: any) => {
      this.tasks = data._body || data || [];
    });
  } // getAllTasks
  create() {
    this.loading = true;
    const postData = {
      description: this.myTask
    };

    this.appservice.createTask(postData).subscribe(data => {
      this.loading = false;
      this.getAllTasks();
      this.myTask = '';
    });
  } // create
  edit(task) {
    this.taskEdit = Object.assign({}, task);
    task.editing = true;
    this.editMode = true;
  } // edit
  saveEdit(task) {
    this.appservice.updateTask(this.taskEdit).subscribe(data => {
      // task = data;
      this.getAllTasks();
      task.editing = false;
      this.editMode = false;
    });
  } // saveEdit
  delete(task) {
    console.log('Delete');
    this.appservice.deleteTask(task.id).subscribe(data => {
      this.getAllTasks();
    });
  } // delete
}
