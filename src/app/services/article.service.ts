import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; // Make sure to import 'map'
import { ApiResponse, Article, Pagination } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) { }

  getArticles(page: number = 1, limit: number = 10, search?: string): Observable<ApiResponse<Article[]>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<ApiResponse<Article[]>>(this.apiUrl, { params })
      .pipe(
        map(response => response), // Now properly typed
        catchError(error => {
          console.error('API Error:', error);
          return throwError(() => error);
        })
      );
  }

  // Keep other methods the same...
  getArticle(id: string): Observable<ApiResponse<Article>> {
    return this.http.get<ApiResponse<Article>>(`${this.apiUrl}/${id}`);
  }

  createArticle(article: Article): Observable<ApiResponse<Article>> {
    return this.http.post<ApiResponse<Article>>(this.apiUrl, article);
  }

  updateArticle(id: string, article: Article): Observable<ApiResponse<Article>> {
    return this.http.put<ApiResponse<Article>>(`${this.apiUrl}/${id}`, article);
  }

  deleteArticle(id: string): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.apiUrl}/${id}`);
  }

  searchArticles(term: string): Observable<ApiResponse<Article[]>> {
    return this.http.get<ApiResponse<Article[]>>(`${this.apiUrl}/search?q=${term}`);
  }
}