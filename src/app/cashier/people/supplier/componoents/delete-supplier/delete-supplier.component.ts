import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Supplier } from 'src/app/interfaces/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrl: './delete-supplier.component.scss',
    encapsulation: ViewEncapsulation.None
  
})
export class DeleteSupplierComponent {
supplier: Supplier;

  constructor(
    private supplierService: SupplierService,
    @Inject(MAT_DIALOG_DATA) public data: { supplier: Supplier },
    public dialogRef: MatDialogRef<DeleteSupplierComponent>
  ) {
    this.supplier = data.supplier;
    console.log('Supplier to delete:', this.supplier);
  }

  onDeleteSupplier(): void {
    const id = this.supplier._id || '' ;
    this.supplierService.deleteSupplier(this.supplier._id).subscribe({
      next: () => {
        console.log('Supplier deleted successfully');
        this.supplierService.notifySupplierUpdated(); // Notify update
        this.dialogRef.close(true); // Close dialog and indicate success
      },
      error: (error) => {
        console.error('Error while deleting supplier:', error);
        alert('Failed to delete supplier. Please try again.');
        this.dialogRef.close(false); // Close dialog and indicate failure
      },
    });
  }

  onCancel(): void {
    this.dialogRef.close(false); // Close dialog without deleting
  }
}
