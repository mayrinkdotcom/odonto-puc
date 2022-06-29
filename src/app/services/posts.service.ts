import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../types/Post';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    ) {}

  create(
    title: string,
    content: string,
    descricao: string,
    tipo: string,
    link: string,
    categoria: string,
  ) {
    const URL = `${environment.BASE_URL}/posts/save`;

    const user = this.authService.getLoggedUser();
    const body = {
      title,
      body: content,
      tbuserId: user.id,
      descricao,
      tipo,
      link,
      categoriaId: categoria,
    };

    return this.httpClient.post<any>(URL, body);
  }

  getAll() {
    const URL = `${environment.BASE_URL}/posts`;
    return this.httpClient.get<any>(URL);
  }

  getLast() {
    const URL = `${environment.BASE_URL}/posts/last`;
    return this.httpClient.get<any>(URL);
  }

  search(searchValue: string) {
    console.log('🚀 -> PostsService -> search -> searchKey', searchValue);
    const URL = `${environment.BASE_URL}/posts/search`;
    const body = {
      key: 'title',
      value: searchValue,
    };
    return this.httpClient.post<{ posts: Post[] }>(URL, body);
  }
  getRecents() {
    const URL = `${environment.BASE_URL}/posts/last`;
    return this.httpClient.get<any>(URL);
  }
  getPostById(id: any) {
    const URL = `${environment.BASE_URL}/posts/view/` + id;
    return this.httpClient.get<any>(URL);
  }

  getCategories(type: string) {
    const URL = `${environment.BASE_URL}/categories/tipo/` + type;
    return this.httpClient.get<any>(URL);
  }

  getSolicitacoes() {
    const URL = `${environment.BASE_URL}/posts/solicitacoes/`;
    return this.httpClient.get<any>(URL);
  }

  getPostsOfCategories(id: any) {
    const URL = `${environment.BASE_URL}/posts/categories/` + id;
    return this.httpClient.get<any>(URL);
  }

  sendDecision(id: number, decision: boolean) {
    const URL = `${environment.BASE_URL}/posts/solicitacao/decision`;
    const body = {
      id,
      decision,
    };
    return this.httpClient.post<any>(URL, body);
  }

  delete(id: number): any {
    const URL = `${environment.BASE_URL}/posts/delete`;
    const body = {
      id
    };
    return this.httpClient.post<any>(URL, body);
  }
}
