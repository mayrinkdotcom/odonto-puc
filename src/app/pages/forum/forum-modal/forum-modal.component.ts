import { ForumListagemComponent } from './../forum-listagem/forum-listagem.component';
import { Component, Inject,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, ForunsCadastradosComponent } from '../foruns-cadastrados/foruns-cadastrados.component';
import { ForumService } from 'src/app/services/forum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-modal',
  templateUrl: './forum-modal.component.html',
  styleUrls: ['./forum-modal.component.scss']
})
export class ForumModalComponent implements OnInit {
  router: Router;

  constructor(
    public dialogRef: MatDialogRef<ForumModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private forumService: ForumService
  ) { }

  forumForm = new FormGroup({
    title: new FormControl(this.data.title, [
      Validators.required
    ]),
    content: new FormControl(this.data.body, [
      Validators.required
    ]),
  });
  salvarEdicao(): void {
    this.forumService.updateForum(this.data.id, this.forumForm.value.title, this.forumForm.value.content).subscribe(resp=>{
      this.dialogRef.close();
      location.reload();
    });
  }
  ngOnInit(): void {

  }
}
