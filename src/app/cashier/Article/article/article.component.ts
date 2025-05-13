import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { EditArticleComponent } from './C/edit-article/edit-article.component';
import { ConfirmDialogComponent } from './C/confirm-dialog/confirm-dialog.component';
import { AddArticleComponent } from './C/add-articledd-article/add-articledd-article.component';
import { Article } from 'src/app/interfaces/article';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleComponent implements OnInit {
  articleList: Article[] = [];
  private subscription: Subscription = new Subscription();
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  searchTerm = '';
  
  //checkbox functionality
  task: Task = {
    name: '',
    completed: false,
    color: 'primary',
  };
  isComplete: boolean = false;
  allComplete: boolean = false;
  oneComplete: boolean = false;

  //sidebar menu activation
  menuSidebarActive: boolean = false;
  
  //header activation
  menuShortcutActive: boolean = false;
  notifyShortcutActive: boolean = false;
  emailShortcutActive: boolean = false;
  langShortcutActive: boolean = false;
  proShortcutActive: boolean = false;

  constructor(
    private articleService: ArticleService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

 loadArticles() {
  this.subscription.add(
    this.articleService.getArticles(this.currentPage, this.itemsPerPage, this.searchTerm).subscribe({
      next: (response) => {
        console.log('API Response:', response);
        this.articleList = response.data; // Directly use data array
        this.totalItems = response.pagination.total;
      },
      error: (error) => {
        console.error("Error loading articles:", error);
        this.snackBar.open('Failed to load articles', 'Close', { duration: 3000 });
      }
    })
  );
}

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.currentPage = 1;
    this.loadArticles();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadArticles();
  }

  addArticle() {
    const dialogRef = this.dialog.open(AddArticleComponent, { width: '600px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.loadArticles();
    });
  }

  editArticle(article: Article) {
    const dialogRef = this.dialog.open(EditArticleComponent, { 
      width: '600px',
      data: { article }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.loadArticles();
    });
  }

  deleteArticle(article: Article) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirm Delete',
        message: `Are you sure you want to delete ${article.designation}?`,
        confirmText: 'Delete',
        cancelText: 'Cancel'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.subscription.add(
          this.articleService.deleteArticle(article._id!).subscribe({
            next: () => {
              this.articleList = this.articleList.filter(a => a._id !== article._id);
              this.snackBar.open('Article deleted successfully', 'Close', { duration: 3000 });
            },
            error: (error) => {
              console.error('Error deleting article:', error);
              this.snackBar.open('Failed to delete article', 'Close', { duration: 3000 });
            }
          })
        );
      }
    });
  }

  //checkbox methods
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.isComplete = completed;
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  setSingleCheck1(completed: boolean) {
    this.oneComplete = completed;
    if (completed) {
      this.isComplete = completed;
    }
  }

  //sidebar menu activation
  myfunction() {
    this.menuSidebarActive = !this.menuSidebarActive;
  }

  //header activation methods
  shortmenu() {
    this.menuShortcutActive = !this.menuShortcutActive;
    if (this.menuShortcutActive) {
      this.emailShortcutActive = false;
      this.notifyShortcutActive = false;
      this.langShortcutActive = false;
      this.proShortcutActive = false;
    }
  }

  notifydropdown() {
    this.notifyShortcutActive = !this.notifyShortcutActive;
    if (this.notifyShortcutActive) {
      this.menuShortcutActive = false;
      this.emailShortcutActive = false;
      this.langShortcutActive = false;
      this.proShortcutActive = false;
    }
  }

  emaildropdown() {
    this.emailShortcutActive = !this.emailShortcutActive;
    if (this.emailShortcutActive) {
      this.menuShortcutActive = false;
      this.notifyShortcutActive = false;
      this.langShortcutActive = false;
      this.proShortcutActive = false;
    }
  }

  langdropdown() {
    this.langShortcutActive = !this.langShortcutActive;
    if (this.langShortcutActive) {
      this.menuShortcutActive = false;
      this.emailShortcutActive = false;
      this.notifyShortcutActive = false;
      this.proShortcutActive = false;
    }
  }

  prodropdown() {
    this.proShortcutActive = !this.proShortcutActive;
    if (this.proShortcutActive) {
      this.menuShortcutActive = false;
      this.emailShortcutActive = false;
      this.notifyShortcutActive = false;
      this.langShortcutActive = false;
    }
  }
}