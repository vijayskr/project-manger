import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { Task } from '../../models/task';
import { TaskService } from '../addtask/services/task.service';
import { AlertService } from '../services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  project: Project;
  Tasks: Task[];
  SortKey: string;

  constructor(
    private taskService: TaskService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  editTask(taskId: number) {
    this.taskService.getTask(taskId).subscribe(response => {
      if (response.Success === true) {
        this.router.navigate(['/task'], {
          queryParams: { taskId: taskId }
        });
      } else {
        this.alertService.error(response.Message, 'Error', 3000);
      }
    });
  }

  endTask(taskId: number) {
    this.taskService.endTask(taskId).subscribe(response => {
      if (response.Success === true) {
        this.refreshList();
        this.alertService.success('Task ended successfully!', 'Success', 3000);
      } else {
        this.alertService.error(response.Message, 'Error', 3000);
      }
    });
  }

  sortTask(sortKey: string) {
    this.SortKey = sortKey;
    this.taskService
      .getTasksList(this.project.Project_ID, sortKey)
      .subscribe(response => {
        if (response.Success === true) {
          this.Tasks = response.Data;
        } else {
          this.alertService.error(response.Message, 'Error', 3000);
        }
      });
  }

  refreshList() {
    // fetch all tasks associated to this project and display
    this.taskService
      .getTasksList(this.project.Project_ID, this.SortKey)
      .subscribe(response => {
        if (response.Success === true) {
          if (response.Data.length === 0) {
            this.alertService.warn(
              'No Tasks found for the project:' + this.project.Project,
              'Warning',
              3000
            );
          }

          this.Tasks = response.Data;
          console.log(this.Tasks);
        } else {
          this.alertService.error(
            'Error occured while fetching tasks for the project:' +
              this.project.Project,
            'Error',
            3000
          );
        }
      });
  }

  // callback from Project search popup
  onProjectSelected(project: Project) {
    this.project = project;
    this.refreshList();
  }
}
