import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Customer } from 'src/app/interfaces/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditCustomerComponent {
  customerToEdit: Customer;

  editCustomerForm!: FormGroup<{
    clientType: FormControl<'physique' | 'moral'>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    companyName: FormControl<string>;
    industry: FormControl<string>;
    emailAddress: FormControl<string>;
    phoneNumber: FormControl<string>;
    postalAddress: FormControl<string>;
    interactionHistory: FormControl<string[]>;
  }>;

  constructor(
    private customerService: CustomerService,
    private fb: NonNullableFormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { customerToEdit: Customer },
    public dialogRef: MatDialogRef<EditCustomerComponent>
  ) {
    this.customerToEdit = data.customerToEdit;
    console.log("Customer to update", this.customerToEdit);

    this.editCustomerForm = this.fb.group({
      clientType: ['physique' as 'physique' | 'moral', Validators.required],
      firstName: [''],
      lastName: [''],
      companyName: [''],
      industry: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      postalAddress: ['', Validators.required],
      interactionHistory: [[] as string[]]
    });

    this.initEditForm();
  }

  initEditForm(): void {
    this.editCustomerForm.patchValue({
      clientType: this.customerToEdit.clientType,
      firstName: this.customerToEdit.firstName || '',
      lastName: this.customerToEdit.lastName || '',
      companyName: this.customerToEdit.companyName || '',
      industry: this.customerToEdit.industry || '',
      emailAddress: this.customerToEdit.emailAddress,
      phoneNumber: this.customerToEdit.phoneNumber,
      postalAddress: this.customerToEdit.postalAddress,
      interactionHistory: this.customerToEdit.interactionHistory || []
    });

    // Set conditional validators based on initial clientType
    this.setConditionalValidators();
    
    // Watch for clientType changes
    this.editCustomerForm.get('clientType')?.valueChanges.subscribe(() => {
      this.setConditionalValidators();
    });
  }

  setConditionalValidators(): void {
    const clientType = this.editCustomerForm.get('clientType')?.value;
    
    if (clientType === 'physique') {
      this.editCustomerForm.get('firstName')?.setValidators([Validators.required]);
      this.editCustomerForm.get('lastName')?.setValidators([Validators.required]);
      this.editCustomerForm.get('companyName')?.clearValidators();
      this.editCustomerForm.get('industry')?.clearValidators();
    } else {
      this.editCustomerForm.get('companyName')?.setValidators([Validators.required]);
      this.editCustomerForm.get('industry')?.setValidators([Validators.required]);
      this.editCustomerForm.get('firstName')?.clearValidators();
      this.editCustomerForm.get('lastName')?.clearValidators();
    }

    this.editCustomerForm.get('firstName')?.updateValueAndValidity();
    this.editCustomerForm.get('lastName')?.updateValueAndValidity();
    this.editCustomerForm.get('companyName')?.updateValueAndValidity();
    this.editCustomerForm.get('industry')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.editCustomerForm.valid) {
      const formData = this.editCustomerForm.value;
      const updateData = {
        ...formData,
        // Only include relevant fields based on clientType
        ...(formData.clientType === 'physique' 
          ? { firstName: formData.firstName, lastName: formData.lastName }
          : { companyName: formData.companyName, industry: formData.industry })
      };

      this.customerService.updateCustomer(this.customerToEdit._id, updateData).subscribe({
        next: () => {
          this.customerService.notifyCustomerUpdated();
          this.dialogRef.close(true);
        },
        error: (error) => {
          console.error("Error updating customer:", error);
        }
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}