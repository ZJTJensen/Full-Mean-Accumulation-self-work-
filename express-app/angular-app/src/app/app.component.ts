import { Component, OnInit } from '@angular/core';
import {Task} from './task'
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any =[];
  task = new Task();
  constructor(private _taskService: TaskService) { }

  onSubmit() {
    console.log(this.task);
    this._taskService.create(this.task).subscribe(
      (success)=>{success},
      (err)=>{console.log('erors')},
      ()=>{}
    );
    this.task = new Task();
    this._taskService.retrieveAll().subscribe(
      (success)=>{this.tasks= success},
      (err)=>{console.log('erors')},
      ()=>{}
    )
  }

  ngOnInit() {
    this._taskService.retrieveAll().subscribe(
      (success)=>{this.tasks= success},
      (err)=>{console.log('erors')},
      ()=>{}
    )
    }

  onDelete(id){
    this._taskService.destroy(id).subscribe(
      (success)=>{success},
      (err)=>{console.log('erors')},
      ()=>{}
    )

    this._taskService.retrieveAll().subscribe(
      (success)=>{this.tasks= success},
      (err)=>{console.log('erors')},
      ()=>{}
    )
  }



  }

