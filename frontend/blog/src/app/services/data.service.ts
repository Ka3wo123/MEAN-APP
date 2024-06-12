import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../post';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:3100';

  constructor(private http: HttpClient) {
  }

  public getAll() {
    return this.http.get<Post>(`${this.url}/api/post/all`);
  }
  public getOne(id: string) {
    return this.http.get<Post>(`${this.url}/api/post/${id}`);
  }

  public addPost(body: Post) {
    return this.http.post<Post>(`${this.url}/api/post`, body);
  }
}

