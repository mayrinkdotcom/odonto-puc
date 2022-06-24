import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  createCategorie(nome: string, tipo:string) {
    const URL = `${environment.BASE_URL}/categories/save`;
    const body = {
      title: nome,
      type: tipo
    };
    return this.httpClient.post<any>(URL, body);
  }
  getAllCategories() {
    const URL = `${environment.BASE_URL}/categories`;
    return this.httpClient.get<any>(URL);
  }
  updateCategorie(id: any, categoria:any) {
    const URL = `${environment.BASE_URL}/categories/update`;
    const body = {
      id: id,
      categoria : categoria
    };
    return this.httpClient.post<any>(URL, body);
  }
  deleteCategorie(id: any) {
    const URL = `${environment.BASE_URL}/categories/delete`;
    const body = {
      id: id,
    };
    return this.httpClient.post<any>(URL, body);
  }
}
