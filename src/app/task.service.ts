import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class TaskService {

  tasks = []
  param = "";
  api = 'https://api.github.com/users/' 
  constructor(private _http: Http) { }

  // retrieveTasks(callback) {
  //   this._http.get(this.api).subscribe(
  //     (response) => { 
  //       this.tasks = response.json();
  //       callback(this.tasks)
  //       console.log(response.json()); },
  //     (error) => { console.log(error); }
  //   );
  // }
  gitScore(param, callback){
    console.log(this.api + param)
    this._http.get(this.api + param).subscribe(
      (response) => {
        this.tasks = response.json();
        callback(this.tasks)
        console.log(response.json());
        return this.tasks
      },
      (error) => { console.log(error); }
    );
    
  }
  createTask(task) {
    
  }

}
