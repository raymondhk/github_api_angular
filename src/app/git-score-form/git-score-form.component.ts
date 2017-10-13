import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { User } from './user';

@Component({
  selector: 'app-git-score-form',
  templateUrl: './git-score-form.component.html',
  styleUrls: ['./git-score-form.component.css']
})
export class GitScoreFormComponent implements OnInit {
  user = new User();
  current: String = ''
  tasks = [];

  constructor(private _taskService: TaskService){}

  onSubmit() {
    console.log(this.user)
    this.current = this.user.username
    console.log(this.current)
    this._taskService.gitScore(this.current, function() {
      console.log("AllGood"); 
    });
    this.tasks.push(this._taskService.tasks)
    console.log(this.tasks)
    this.user = new User()
    
  }
  // nameGen(_taskService: TaskService) {
  //   _taskService.gitScore(this.current, this);
  // }

  // constructor(private _taskService: TaskService) {
  //   this._taskService.gitScore(this.current, this) => {
  //     this.tasks = tasks;
  //   });
  // }

  ngOnInit() {
  }

}
