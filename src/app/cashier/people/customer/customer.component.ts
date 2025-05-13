import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { AddcustomerpopupComponent } from '../../popup/addcustomerpopup/addcustomerpopup.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';


//for checkbox
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {
  customerList: Customer[] = [];
  private subscription: Subscription = new Subscription();
  
  // Checkbox properties
  task: Task = {
    name: '',
    completed: false,
    color: 'primary',
  };
  isComplete: boolean = false;
  allComplete: boolean = false;
  oneComplete: boolean = false;
  
  // Sidebar and header properties
  menuSidebarActive: boolean = false;
  menuShortcutActive: boolean = false;
  notifyShortcutActive: boolean = false;
  emailShortcutActive: boolean = false;
  langShortcutActive: boolean = false;
  proShortcutActive: boolean = false;

  constructor(
    private customerService: CustomerService, 
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
    
    this.subscription.add(
      this.customerService.customerUpdated$.subscribe(() => {
        console.log('Customer update notification received, reloading customers');
        this.loadCustomers();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (response: Customer[]) => {
        this.customerList = response;
        console.log("Customer list loaded: ", this.customerList);
      },
      error: (error: any) => {
        console.error('Error loading customers:', error);
        this.snackBar.open('Failed to load customers', 'Close', {
          duration: 3000
        });
      }
    });
  }

  addCustomer(): void {
    const dialogRef = this.dialog.open(AddcustomerpopupComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCustomers();
      }
    });
  }

  editCustomer(customer: Customer): void {
    this.dialog.open(EditCustomerComponent, {
      data: {
        customerToEdit: customer
      },
    });
  }

  deleteCustomer(customer: Customer): void {
  this.customerService.deleteCustomer(customer._id).subscribe({
    next: () => {
      console.log('Customer deleted successfully:', customer);
      this.customerList = this.customerList.filter((c) => c._id !== customer._id);
      this.snackBar.open('Customer deleted successfully', 'Close', {
        duration: 3000
      });
    },
    error: (error) => {
      console.error('Error deleting customer:', error);
      this.snackBar.open('Failed to delete customer', 'Close', {
        duration: 3000
      });
    }
  });
}

  // Checkbox methods
  updateAllComplete(): void {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  } 

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean): void {
    this.isComplete = completed;
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  setSingleCheck1(completed: boolean): void {
    this.oneComplete = completed;
    if (completed) {
      this.isComplete = completed;
    }
  } 

  // Sidebar and header methods
  myfunction(): void {
    this.menuSidebarActive = !this.menuSidebarActive;
  }

  shortmenu(): void {
    this.menuShortcutActive = !this.menuShortcutActive;
    this.emailShortcutActive = false;
    this.notifyShortcutActive = false;
    this.langShortcutActive = false;
    this.proShortcutActive = false;
  }

  notifydropdown(): void {
    this.notifyShortcutActive = !this.notifyShortcutActive;
    this.menuShortcutActive = false;
    this.emailShortcutActive = false;
    this.langShortcutActive = false;
    this.proShortcutActive = false;
  }

  emaildropdown(): void {
    this.emailShortcutActive = !this.emailShortcutActive;
    this.menuShortcutActive = false;
    this.notifyShortcutActive = false;
    this.langShortcutActive = false;
    this.proShortcutActive = false;
  }

  langdropdown(): void {
    this.langShortcutActive = !this.langShortcutActive;
    this.menuShortcutActive = false;
    this.emailShortcutActive = false;
    this.notifyShortcutActive = false;
    this.proShortcutActive = false;
  }

  prodropdown(): void {
    this.proShortcutActive = !this.proShortcutActive;
    this.menuShortcutActive = false;
    this.emailShortcutActive = false;
    this.notifyShortcutActive = false;
    this.langShortcutActive = false;
  }

  getCustomerName(customer: Customer): string {
    if (customer.clientType === 'moral') {
      return customer.companyName || 'N/A';
    } else {
      return `${customer.firstName || ''} ${customer.lastName || ''}`.trim() || 'N/A';
    }
  }

  getCustomerType(customer: Customer): string {
    return customer.clientType === 'moral' ? 'Company' : 'Individual';
  }
}