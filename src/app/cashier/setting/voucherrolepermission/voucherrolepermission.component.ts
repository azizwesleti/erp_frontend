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
  selector: 'app-voucherrolepermission',
  templateUrl: './voucherrolepermission.component.html',
  styleUrls: ['./voucherrolepermission.component.scss']
})
export class VoucherrolepermissionComponent implements OnInit {

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

  setAllB(completed: boolean) {
    this.isComplete = completed;
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  setSingleCheck17(completed: boolean) {
    this.oneComplete = completed;
  }
  setSingleCheck18(completed: boolean) {
    this.twoComplete = completed;
  }
  setSingleCheck19(completed: boolean) {
    this.threeComplete = completed;
  }
  setSingleCheck20(completed: boolean) {
    this.fourComplete = completed;
  }
  setSingleCheck21(completed: boolean) {
    this.fiveComplete = completed;
  }
  setSingleCheck22(completed: boolean) {
    this.sixComplete = completed;
  }
  setSingleCheck23(completed: boolean) {
    this.sevenComplete = completed;
  }
  setSingleCheck24(completed: boolean) {
    this.eightComplete = completed;
  }
  setSingleCheck25(completed: boolean) {
    this.nineComplete = completed;
  }
  setSingleCheck26(completed: boolean) {
    this.tenComplete = completed;
  }
  setSingleCheck27(completed: boolean) {
    this.elevenComplete = completed;
  }
  setSingleCheck28(completed: boolean) {
    this.twelveComplete = completed;
  }
  setSingleCheck29(completed: boolean) {
    this.thirteenComplete = completed;
  }
  setSingleCheck30(completed: boolean) {
    this.fourteenComplete = completed;
  }
  setSingleCheck31(completed: boolean) {
    this.fifteenComplete = completed;
  }
  setSingleCheck32(completed: boolean) {
    this.sixteenComplete = completed;
  }
  //checkbox end

  constructor() {}

  ngOnInit(): void {}

}
