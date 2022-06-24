import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/services/file.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent implements OnInit {
  constructor(
    private fileService: FileService,
    private postService: PostsService
  ) {}

  showFile = false;
  fileUploads: any[] = [];
  filePosts: any[] = [];

  ngOnInit(): void {
    this.fileService.getFiles().subscribe((result) => {
      this.fileUploads = result;
      console.log(this.fileUploads[0]);
    });

    this.postService.getAll().subscribe((result) => {
      this.filePosts = result;
      console.log(this.filePosts[0]);
    });
  }

  showFiles(enable: boolean) {
    if (enable) {
      return this.fileUploads;
    }
  }
}
