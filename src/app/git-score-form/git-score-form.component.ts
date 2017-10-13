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
  message = ""

  constructor(private _taskService: TaskService){}

  onSubmit() {
    let self = this
    console.log(this.user)
    this.current = this.user.username
    console.log(this.current)
    this._taskService.gitScore(this.current, function(tasks){           self.tasks = tasks;
      console.log(self.tasks)
    });
    this.tasks.push(this._taskService.tasks)
    this.message = "No user Found."
    this.user = new User()
    
  }

  ngOnInit() {
  }

}
