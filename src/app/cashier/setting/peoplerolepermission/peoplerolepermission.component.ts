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
  selector: 'app-peoplerolepermission',
  templateUrl: './peoplerolepermission.component.html',
  styleUrls: ['./peoplerolepermission.component.scss']
})
export class PeoplerolepermissionComponent implements OnInit {

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
  fiveComplete: boolean = false;
  sixComplete: boolean = false;
  sevenComplete: boolean = false;
  eightComplete: boolean = false;
  nineComplete: boolean = false;
  tenComplete: boolean = false;
  elevenComplete: boolean = false;
  twelveComplete: boolean = false;
  thirteenComplete: boolean = false;
  fourteenComplete: boolean = false;
  fifteenComplete: boolean = false;
  sixteenComplete: boolean = false;
  seventeenComplete: boolean = false;
  eighteenComplete: boolean = false;
  nineteenComplete: boolean = false;
  twentyComplete: boolean = false;

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

  setAllE(completed: boolean) {
    this.isComplete = completed;
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  setSingleCheck43(completed: boolean) {
    this.oneComplete = completed;
  }
  setSingleCheck44(completed: boolean) {
    this.twoComplete = completed;
  }
  setSingleCheck45(completed: boolean) {
    this.threeComplete = completed;
  }
  setSingleCheck46(completed: boolean) {
    this.fourComplete = completed;
  }
  setSingleCheck47(completed: boolean) {
    this.fiveComplete = completed;
  }
  setSingleCheck48(completed: boolean) {
    this.sixComplete = completed;
  }
  setSingleCheck49(completed: boolean) {
    this.sevenComplete = completed;
  }
  setSingleCheck50(completed: boolean) {
    this.eightComplete = completed;
  }
  setSingleCheck51(completed: boolean) {
    this.nineComplete = completed;
  }
  setSingleCheck52(completed: boolean) {
    this.tenComplete = completed;
  }
  setSingleCheck53(completed: boolean) {
    this.elevenComplete = completed;
  }
  setSingleCheck54(completed: boolean) {
    this.twelveComplete = completed;
  }
  setSingleCheck55(completed: boolean) {
    this.thirteenComplete = completed;
  }
  setSingleCheck56(completed: boolean) {
    this.fourteenComplete = completed;
  }
  setSingleCheck57(completed: boolean) {
    this.fifteenComplete = completed;
  }
  setSingleCheck58(completed: boolean) {
    this.sixteenComplete = completed;
  }

  setSingleCheck59(completed: boolean) {
    this.seventeenComplete = completed;
  }
  setSingleCheck60(completed: boolean) {
    this.eighteenComplete = completed;
  }
  setSingleCheck61(completed: boolean) {
    this.nineteenComplete = completed;
  }
  setSingleCheck62(completed: boolean) {
    this.twentyComplete = completed;
  }
  //checkbox end

  constructor() {}

  ngOnInit(): void {}

}
