import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

//for checkbox
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-companyrolepermission',
  templateUrl: './companyrolepermission.component.html',
  styleUrls: ['./companyrolepermission.component.scss']
})
export class CompanyrolepermissionComponent implements OnInit {

  //checkbox start
  task: Task = {
    name: 'Permission All',
    completed: false,
    color: 'primary',
    
  };
  isComplete : boolean = false;
  allComplete: boolean = false;
  oneComplete: boolean = false;
  twoComplete: boolean = false;
  threeComplete: boolean = false;
  fourComplete: boolean = false;

  disabled_condition = true;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }
  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAllD(completed: boolean) {
    this.isComplete = completed;
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  setSingleCheck39(completed: boolean) {
    this.oneComplete = completed;
  }
  setSingleCheck40(completed: boolean) {
    this.twoComplete = completed;
  }
  setSingleCheck41(completed: boolean) {
    this.threeComplete = completed;
  }
  setSingleCheck42(completed: boolean) {
    this.fourComplete = completed;
  }
//checkbox end

constructor() {}

ngOnInit(): void {}

}
