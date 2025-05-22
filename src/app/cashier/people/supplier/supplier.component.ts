import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { AddsupplierpopupComponent } from '../../popup/addsupplierpopup/addsupplierpopup.component';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { EditSupplierComponent } from './componoents/edit-supplier/edit-supplier.component';
import { Subscription } from 'rxjs';
import { Supplier } from 'src/app/interfaces/supplier';
import { DeleteSupplierComponent } from './componoents/delete-supplier/delete-supplier.component';
import { DatePipe } from '@angular/common';

//for checkbox
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class SupplierComponent implements OnInit {

supplierList: Supplier [] = [];
private subscription: Subscription = new Subscription();
  //checkbox start
   task: Task = {
    name: '',
    completed: false,
    color: 'primary',
    
  };
  isComplete : boolean = false;
  allComplete: boolean = false;
  oneComplete: boolean = false;
  twoComplete: boolean = false;
 
    
  constructor(private supplierService: SupplierService, private datePipe: DatePipe, public dialog: MatDialog) {}

  ngOnInit(): void {
    // Load initial supplier list
    this.loadSuppliers();

    // Subscribe to supplier update notifications
    this.subscription.add(
      this.supplierService.onSupplierUpdated().subscribe(() => {
        console.log('Supplier update notification received, reloading suppliers');
        this.loadSuppliers();
      })
    );
  }

  ngOnDestroy(): void {
    // Clean up subscription
    this.subscription.unsubscribe();
  }
  addSupplier() {
    this.dialog.open(AddsupplierpopupComponent);
  }

  formatDate(date: string): string {
    return this.datePipe.transform(date, 'dd MMM yyyy') || '';
  }

  editSupplier(supplier: any) {
    // Open the EditSupplierComponent as a dialog and pass supplierToEdit
    this.dialog.open(EditSupplierComponent, {
      data: {
        supplierToEdit: supplier, // Pass the supplier object to the dialog
      },
    });
  }

  loadSuppliers(){
    this.supplierService.getSuppliers().subscribe({
      next: (response : any) => {
        this.supplierList = response.data;
        console.log("la list des fournisseurs est : ", this.supplierList);
        },
        error: (error: any) => {
          console.error(error);
          }
    })
  }

  deleteSupplier(supplier: Supplier): void {
    const dialogRef = this.dialog.open(DeleteSupplierComponent, {
      data: { supplier },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        console.log('Supplier deleted via dialog:', supplier);
        // Optionally remove the supplier from the local list immediately
        this.supplierList = this.supplierList.filter((s) => s._id !== supplier._id);
      }
    });
  }
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }
  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.isComplete = completed;
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

   setSingleCheck1(completed: boolean) {
    console.log(this.oneComplete);
    console.log(completed);
    this.oneComplete = completed;
    if(completed) {
      this.isComplete = completed;
    }
   /*  if( !this.sixteenComplete && !this.fifteenComplete && !this.fourteenComplete && !this.thirteenComplete && !this.twelveComplete && !this.elevenComplete && !this.tenComplete && !this.nineComplete && !this.eightComplete && !this.sevenComplete && !this.sixComplete && !this.fiveComplete && !this.fourComplete && !this.threeComplete && !this.twoComplete && !this.oneComplete ) {
      this.isComplete = completed;
    } */
  } 
  
  //checkbox end




  //sidebar menu activation start
  menuSidebarActive:boolean=false;
  myfunction(){
    if(this.menuSidebarActive==false){
      this.menuSidebarActive=true;
    }
    else {
      this.menuSidebarActive=false;
    }
  }
  //sidebar menu activation end


  //header activation start here
  menuShortcutActive:boolean=false;
  shortmenu(){
    if(this.menuShortcutActive==false){
      this.menuShortcutActive=true;
      this.emailShortcutActive=false;
      this.notifyShortcutActive=false;
      this.langShortcutActive=false;
      this.proShortcutActive=false;
    }
    else {
      this.menuShortcutActive=false;
    }
  }

  notifyShortcutActive:boolean=false;
  notifydropdown(){
    if(this.notifyShortcutActive==false){
      this.menuShortcutActive=false;
      this.emailShortcutActive=false;
      this.notifyShortcutActive=true;
      this.langShortcutActive=false;
      this.proShortcutActive=false;
    }
    else {
      this.notifyShortcutActive=false;
    }
  }

  emailShortcutActive:boolean=false;
  emaildropdown(){
    if(this.emailShortcutActive==false){
      this.menuShortcutActive=false;
      this.emailShortcutActive=true;
      this.notifyShortcutActive=false;
      this.langShortcutActive=false;
      this.proShortcutActive=false;
    }
    else {
      this.emailShortcutActive=false;

    }
  }

  langShortcutActive:boolean=false;
  langdropdown(){
    if(this.langShortcutActive==false){
      this.menuShortcutActive=false;
      this.emailShortcutActive=false;
      this.notifyShortcutActive=false;
      this.langShortcutActive=true;
      this.proShortcutActive=false;
    }
    else {
      this.langShortcutActive=false;

    }
  }

  proShortcutActive:boolean=false;
  prodropdown(){
    if(this.proShortcutActive==false){
      this.menuShortcutActive=false;
      this.emailShortcutActive=false;
      this.notifyShortcutActive=false;
      this.langShortcutActive=false;
      this.proShortcutActive=true;
    }
    else {
      this.proShortcutActive=false;

    }
  }
  //header activation end here


}
