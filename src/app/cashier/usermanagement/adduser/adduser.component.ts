import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserCreatedComponent } from '../user-created/user-created.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdduserComponent implements OnInit {

  createUserForm!: FormGroup<{
    name: FormControl<string>;
    email:FormControl<string>;
    phone: FormControl<string>;
    role: FormControl<string>;
  
  
  }>;

    constructor(private userService: AuthService, private fb : NonNullableFormBuilder, public dialog: MatDialog ) {
      this.createUserForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        role: ['', Validators.required],
        });
    
    }
  

    onSubmit() {
        if(this.createUserForm.valid) {
          const data = { ...this.createUserForm.value } ;
    
          const userData: any = {
          name: data.name || '',
          email: data.email || '',
          phone: data.phone || '',
          role: data.role || 'employe',
          password: 'admin123'
          
        };
    
        console.log('Prepared user data:', userData);
    
          console.log("data regestred in form", data);  
    
          this.userService.register(userData).subscribe({
            next: (response) => {
              console.log("User created succesfully", response);
              this.confirmCreationPopup();
            },
            error: (error) => { 
              console.error("error while creating User",error);
              }
          })
        } else {
        console.error("form is invalid");
      }
    }

      confirmCreationPopup() {
        this.dialog.open(UserCreatedComponent);
      }
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

  hide = true;

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


  ngOnInit(): void {}

}
