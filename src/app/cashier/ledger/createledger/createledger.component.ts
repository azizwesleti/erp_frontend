import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Article } from 'src/app/interfaces/article';
import { StockMvtToAdd } from 'src/app/interfaces/stock-mvt';
import { ArticleService } from 'src/app/services/article.service';
import { StockMvtService } from 'src/app/services/stockMvt/stock-mvt.service';
import { ConfirmSubmitPopupComponent } from '../confirm-submit-popup/confirm-submit-popup.component';

@Component({
  selector: 'app-createledger',
  templateUrl: './createledger.component.html',
  styleUrls: ['./createledger.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateledgerComponent implements OnInit {

  articleList: Article[] = [];

  stockMvtForm!: FormGroup<{
    articleId: FormControl<string>;
    quantityChange:FormControl<number>;
    movementType: FormControl<string>;
    relatedDocumentModel: FormControl<string>;
    date: FormControl<string>;
  
  }>;
  
constructor(private articleService: ArticleService, 
        private stockMvtService: StockMvtService,  
        private fb : NonNullableFormBuilder,
      public dialog: MatDialog) {

   this.stockMvtForm = this.fb.group({
        articleId: ['', Validators.required],
        quantityChange: [0 , [Validators.required]],
        movementType: ['', Validators.required],
        relatedDocumentModel: ['', Validators.required],
        date: ['', Validators.required]
        });
 }

  ngOnInit(): void {
    this.loadArticles()
  }

  loadArticles() {
 
    this.articleService.getArticles().subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.articleList = response.data; // Directly use data array
      },
      error: (error) => {
        console.error("Error loading articles:", error);
      }
    })
  
}

onSubmit() {
    if(this.stockMvtForm.valid) {
      const data = { ...this.stockMvtForm.value } ;

      const stockMvtData: StockMvtToAdd = {
      articleId: data.articleId || '',
      quantityChange: data.quantityChange || 0,
      movementType: data.movementType || '',
      relatedDocumentModel: data.relatedDocumentModel || '',
      date: data.date || '',
      relatedDocumentId : "682787717ba0eb67e5bbc67a",  
    };

    console.log('Prepared stockMvt data:', stockMvtData);

      console.log("data regestred in form", data);  

      this.stockMvtService.addStockMvt(stockMvtData).subscribe({
        next: (response) => {
          console.log("Stock-Mvt created succesfully", response);
          this.confirmCreationPopup();
        },
        error: (error) => { 
          console.error("error while creating Stock-Mvt",error);
          }
      })
    } else {
    console.error("form is invalid");
  }
}

  confirmCreationPopup() {
    this.dialog.open(ConfirmSubmitPopupComponent);
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

  

}
