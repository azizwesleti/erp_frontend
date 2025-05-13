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
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-edit-article',
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
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent {
  editForm: FormGroup;
  isSubmitting = false;
  categories: string[] = ['Electronics', 'Clothing', 'Books', 'Home', 'Other'];

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { article: Article }
  ) {
    this.editForm = this.fb.group({
      code: [data.article.code, [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/)]],
      designation: [data.article.designation, Validators.required],
      famille: [data.article.famille || ''],
      prixAchat: [data.article.prixAchat || 0, [Validators.required, Validators.min(0)]],
      prixVente: [data.article.prixVente || 0, [Validators.required, Validators.min(0)]],
      stock: [data.article.stock || 0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.isSubmitting = true;
      this.articleService.updateArticle(this.data.article._id!, this.editForm.value)
        .subscribe({
          next: () => {
            this.snackBar.open('Article updated successfully', 'Close', {
              duration: 3000
            });
            this.dialogRef.close(true);
          },
          error: (error) => {
            console.error('Error updating article:', error);
            this.snackBar.open('Failed to update article', 'Close', {
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