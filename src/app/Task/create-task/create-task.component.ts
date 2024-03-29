import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Task} from "../../model/task";
import {TaskService} from "../TaskService/task.service";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task : Task = new Task();
  submitted=false;

  constructor(private taskService: TaskService, private router: Router) {
  }

  ngOnInit(): void {
  }

  save(email:string) {
    this.taskService.createTask(this.task).subscribe(data => {
        this.task = new Task();
        this.gotoList(email);
      },
      error => console.log(error));
  }

  public gotoList(email:string) {
    this.router.navigate(['/list',email]);

  }

  onSubmit(email:string) {
    this.submitted=true;
    this.save(email);
  }

}
