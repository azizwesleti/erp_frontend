import { Component, Inject, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Supplier } from 'src/app/interfaces/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrl: './edit-supplier.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EditSupplierComponent {

  supplierToEdit : Supplier;

  editSupplierForm!: FormGroup<{
    nom: FormControl<string>;
    email:FormControl<string>;
    téléphone: FormControl<string>;
    adresse: FormControl<string>;
    contact: FormControl<string>;
    historique: FormControl<string>;
  
  }>;
    constructor(private supplierService: SupplierService, 
        private fb : NonNullableFormBuilder,
      @Inject(MAT_DIALOG_DATA) public data: { supplierToEdit: any }, 
      public dialogRef: MatDialogRef<EditSupplierComponent>
    ) {
      this.supplierToEdit = data.supplierToEdit;
      console.log("supplier to update", this.supplierToEdit);

      this.editSupplierForm = this.fb.group({
        nom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        téléphone: ['', Validators.required],
        adresse: ['', Validators.required],
        contact: ['', Validators.required],
        historique: ['', Validators.required],
        });
    
        this.initEditForm();
  
    }
  
    ngOnInit(): void {}
  
    
    initEditForm () : void {
      
      this.editSupplierForm.patchValue({
        nom: this.supplierToEdit.nom,
        email: this.supplierToEdit.email,
        téléphone: this.supplierToEdit.téléphone,
        adresse: this.supplierToEdit.adresse,
        contact: this.supplierToEdit.contact,
        historique: this.supplierToEdit.historique
      })
    }
    
    onSubmit() {
      if(this.editSupplierForm.valid) {
        const data = { ...this.editSupplierForm.value } ;
  
        console.log("data regestred in form", data);  
  
        this.supplierService.updateSupplier(this.supplierToEdit._id,data).subscribe({
          next: (response) => {
            console.log("supllier updated succesfully", response);
            this.supplierService.notifySupplierUpdated();
            this.onCancel();
          },
          error: (error) => { 
            console.error("error while updating supplier",error);
            }
        })
      } else {
      console.error("form is invalid");
    }
  }

  onCancel() {
    this.dialogRef.close(); // Close dialog without saving
  }
}