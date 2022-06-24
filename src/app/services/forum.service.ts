import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) { }

  create(title: string, content: string) {
    const URL = `${environment.BASE_URL}/forum/save`;
    const body = {
      title: title,
      body: content,
    };
    return this.httpClient.post<any>(URL, body);
  }

  getAllForuns() {
    const URL = `${environment.BASE_URL}/forum`;
    return this.httpClient.get<any>(URL);
  }

  getById(id: number) {
    const URL = `${environment.BASE_URL}/forum/getById?id=${id}`;
    return this.httpClient.get<any>(URL);
  }

  getForumAnswers(forumId:number) {
    const URL = `${environment.BASE_URL}/forumAnswers?id=${forumId}`;
    return this.httpClient.get<any>(URL);
  }

  updateForum(id: any, title:string, content: string) {
    const URL = `${environment.BASE_URL}/forum/update`;
    const body = {
      id: id,
      title : title,
      body: content
    };
    return this.httpClient.post<any>(URL, body);
  }

  deleteForum(id: any) {
    const URL = `${environment.BASE_URL}/forum/delete`;
    const body = {
      id: id,
    };
    return this.httpClient.post<any>(URL, body);
  }

  createAnswer(content: string, forumId: number) {
    const URL = `${environment.BASE_URL}/forumAnswers/save`;
    const user = this.authService.getLoggedUser();
    const body = {
      body: content,
      forum: forumId,
      userId: user.id,
    };

    return this.httpClient.post<any>(URL, body);
  }
}
