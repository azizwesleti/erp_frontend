import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './add-articledd-article.component.html',
  styleUrl: './add-articledd-article.component.scss'
})
export class AddArticleComponent {
  articleForm: FormGroup;
  isSubmitting = false;
  categories: string[] = ['Electronics', 'Clothing', 'Books', 'Home', 'Other'];

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddArticleComponent>
  ) {
    this.articleForm = this.fb.group({
      code: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]],
      designation: ['', Validators.required],
      famille: [''],
      prixAchat: [0, [Validators.required, Validators.min(0)]],
      prixVente: [0, [Validators.required, Validators.min(0)]],
      stock: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.articleForm.valid) {
      this.isSubmitting = true;
      this.articleService.createArticle(this.articleForm.value)
        .subscribe({
          next: (response) => {
            this.snackBar.open('Article created successfully', 'Close', {
              duration: 3000
            });
            this.dialogRef.close(true);
          },
          error: (error) => {
            console.error('Error creating article:', error);
            this.snackBar.open('Failed to create article', 'Close', {
              duration: 3000
            });
            this.isSubmitting = false;
          }
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}