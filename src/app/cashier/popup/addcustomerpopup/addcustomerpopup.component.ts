import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; // Added for notifications
import { CustomerToAdd } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-addcustomerpopup',
  templateUrl: './addcustomerpopup.component.html',
  styleUrls: ['./addcustomerpopup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddcustomerpopupComponent implements OnInit {
  clientTypes = [
    { value: 'physique', viewValue: 'Individual' },
    { value: 'moral', viewValue: 'Company' },
  ];
  showCompanyFields = false;

  createCustomerForm!: FormGroup;

  constructor(
    private customerService: CustomerService,
    private fb: NonNullableFormBuilder,
    private dialogRef: MatDialogRef<AddcustomerpopupComponent>,
    private snackBar: MatSnackBar // Added for notifications
  ) {
    this.createCustomerForm = this.fb.group({
      clientType: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      companyName: [''],
      industry: [''],
      phoneNumber: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      postalAddress: [''],
    });

    this.createCustomerForm.get('clientType')?.valueChanges.subscribe((value) => {
      this.showCompanyFields = value === 'moral';
      this.updateValidators();
    });
  }

  ngOnInit(): void {
    this.updateValidators();
  }

  private updateValidators(): void {
    const isCompany = this.showCompanyFields;

    const firstNameControl = this.createCustomerForm.get('firstName');
    const lastNameControl = this.createCustomerForm.get('lastName');
    const companyNameControl = this.createCustomerForm.get('companyName');
    const industryControl = this.createCustomerForm.get('industry');

    if (isCompany) {
      firstNameControl?.clearValidators();
      lastNameControl?.clearValidators();
      companyNameControl?.setValidators([Validators.required]);
      industryControl?.setValidators([Validators.required]);
    } else {
      firstNameControl?.setValidators([Validators.required]);
      lastNameControl?.setValidators([Validators.required]);
      companyNameControl?.clearValidators();
      industryControl?.clearValidators();
    }

    firstNameControl?.updateValueAndValidity();
    lastNameControl?.updateValueAndValidity();
    companyNameControl?.updateValueAndValidity();
    industryControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.createCustomerForm.valid) {
      const formValue = this.createCustomerForm.value;
      const customerData: CustomerToAdd = {
        clientType: formValue.clientType,
        firstName: formValue.firstName || undefined,
        lastName: formValue.lastName || undefined,
        companyName: formValue.companyName || undefined,
        industry: formValue.industry || undefined,
        phoneNumber: formValue.phoneNumber || '',
        emailAddress: formValue.emailAddress,
        postalAddress: formValue.postalAddress || '',
      };

      this.customerService.addCustomer(customerData).subscribe({
        next: (response) => {
          console.log('Customer created successfully', response);
          this.snackBar.open('Customer created successfully!', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.customerService.notifyCustomerUpdated(); // Notify other components
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error('Error while creating customer', error);
          const errorMessage =
            error.error?.message || 'An unknown error occurred while creating the customer';
          this.snackBar.open(`Error: ${errorMessage}`, 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });
        },
      });
    } else {
      console.error('Form is invalid');
      this.createCustomerForm.markAllAsTouched();
      this.snackBar.open('Please fill all required fields correctly', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['error-snackbar'],
      });
    }
  }
}