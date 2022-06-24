import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private httpClient: HttpClient) {}

  upload(file: File, data: string) {
    const URL = `${environment.BASE_URL}/file/save`;
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('post', data);
    return this.httpClient.post<any>(URL, formdata);
  }

  getFiles() {
    const URL = `${environment.BASE_URL}/file`;
    return this.httpClient.get<any>(URL);
  }

  getforumData() {
    const URL = `${environment.BASE_URL}/files/posts`;
    return this.httpClient.get<any>(URL);
  }

  getFileByPost(id: any){
    const URL = `${environment.BASE_URL}/files/post/`+id;
    return this.httpClient.get<any>(URL);
  }
}
