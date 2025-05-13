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
  selector: 'app-paymentrolepermission',
  templateUrl: './paymentrolepermission.component.html',
  styleUrls: ['./paymentrolepermission.component.scss']
})
export class PaymentrolepermissionComponent implements OnInit {

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

  setAllA(completed: boolean) {
    this.isComplete = completed;
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  setSingleCheck5(completed: boolean) {
    this.oneComplete = completed;
  }
  setSingleCheck6(completed: boolean) {
    this.twoComplete = completed;
  }
  setSingleCheck7(completed: boolean) {
    this.threeComplete = completed;
  }
  setSingleCheck8(completed: boolean) {
    this.fourComplete = completed;
  }
  setSingleCheck9(completed: boolean) {
    this.fiveComplete = completed;
  }
  setSingleCheck10(completed: boolean) {
    this.sixComplete = completed;
  }
  setSingleCheck11(completed: boolean) {
    this.sevenComplete = completed;
  }
  setSingleCheck12(completed: boolean) {
    this.eightComplete = completed;
  }
  setSingleCheck13(completed: boolean) {
    this.nineComplete = completed;
  }
  setSingleCheck14(completed: boolean) {
    this.tenComplete = completed;
  }
  setSingleCheck15(completed: boolean) {
    this.elevenComplete = completed;
  }
  setSingleCheck16(completed: boolean) {
    this.twelveComplete = completed;
  }
  //checkbox end

  constructor() {}

  ngOnInit(): void {}

}
