import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class FakeBackendService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const tasks = [
      {
        id: 1,
        description: 'Buy Groceries'
      },
      {
        id: 2,
        description: 'Paint the garage'
      }
    ];
    const empDetail = [
      {
        empId: 1,
        empName: 'Steve'
      },
      {
        empId: 2,
        empName: 'Brock'
      },
      {
        empId: 3,
        empName: 'Goldberg'
      }
    ];
    return {
      tasks: tasks,
      empDetail: empDetail
    };
  }
}
