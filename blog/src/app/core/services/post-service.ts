import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/entites/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = environment.apiUrl;

  private constructor(private http: HttpClient) {
  }


  public findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/api/posts`);
  }

  public add(post: Post) {
    return this.http.post(`${this.apiUrl}/api/posts`, post);

  }

  public getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/api/posts/${id}`);
  }

  public deleteById(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/api/posts/${id}`);
  }

  public updatePost(id: number, title: string, description: string): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/api/posts/${id}`, {
      title,
      description
    });
  }
}
