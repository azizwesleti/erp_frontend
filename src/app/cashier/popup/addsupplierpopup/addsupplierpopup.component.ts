import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Supplier, SupplierToAdd } from 'src/app/interfaces/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-addsupplierpopup',
  templateUrl: './addsupplierpopup.component.html',
  styleUrls: ['./addsupplierpopup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddsupplierpopupComponent implements OnInit {
createSupplieForm!: FormGroup<{
  nom: FormControl<string>;
  email:FormControl<string>;
  téléphone: FormControl<string>;
  adresse: FormControl<string>;
  contact: FormControl<string>;
  historique: FormControl<string>;

}>;
  constructor(private supplierService: SupplierService, private fb : NonNullableFormBuilder ) {
    this.createSupplieForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      téléphone: ['', Validators.required],
      adresse: ['', Validators.required],
      contact: ['', Validators.required],
      historique: ['', Validators.required],
      });
  
  }

  ngOnInit(): void {}

  onSubmit() {
    if(this.createSupplieForm.valid) {
      const data = { ...this.createSupplieForm.value } ;

      const supplierData: SupplierToAdd = {
      nom: data.nom || '',
      email: data.email || '',
      téléphone: data.téléphone || '',
      adresse: data.adresse || '',
      contact: data.contact || '',
      historique: data.historique || '',
    };

    console.log('Prepared supplier data:', supplierData);

      console.log("data regestred in form", data);  

      this.supplierService.addSupplier(supplierData).subscribe({
        next: (response) => {
          console.log("supllier created succesfully", response);
        },
        error: (error) => { 
          console.error("error while creating supplier",error);
          }
      })
    } else {
    console.error("form is invalid");
  }
}

}
