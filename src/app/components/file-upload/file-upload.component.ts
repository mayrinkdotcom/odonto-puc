import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private FileService: FileService) {}

  ngOnInit() {}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.FileService.upload(this.currentFileUpload, '1').subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(
          (100 * event.loaded) / event.total
        );
      } else if (event instanceof HttpResponse) {
        console.log('Arquivo enviado com sucesso');
      }
    });

    this.selectedFiles = undefined;
  }
}
