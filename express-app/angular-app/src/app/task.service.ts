import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'Rxjs';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasksObserver = new BehaviorSubject([]);


  constructor(private _http: HttpClient) { }

  create(task){
    return this._http.post('/add', task)
  }
  update(){

  }

  destroy(id){
    
    return this._http.delete('/delete/'+ id)
  }

  retrieveAll(){
    return this._http.get('/all');
  }
}