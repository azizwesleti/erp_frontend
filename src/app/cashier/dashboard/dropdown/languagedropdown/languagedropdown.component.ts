import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-languagedropdown',
  templateUrl: './languagedropdown.component.html',
  styleUrls: ['./languagedropdown.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguagedropdownComponent implements OnInit {

//   //short menu activation start
//   langSubMenuActive:boolean=false;
//   langSubMenu(){
//     if(this.langSubMenuActive==false){
//       this.langSubMenuActive=true;
//     }
//     else {
//       this.langSubMenuActive=false;
//     }
//   }
// //short menu activation end

  constructor() { }

  ngOnInit(): void {}

}
