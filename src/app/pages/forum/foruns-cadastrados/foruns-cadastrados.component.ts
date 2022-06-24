import { Component, OnInit } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ForumModalComponent } from '../forum-modal/forum-modal.component';

export interface DialogData {
  title: string;
  body: string;
  id: any;
}

@Component({
  selector: 'app-foruns-cadastrados',
  templateUrl: './foruns-cadastrados.component.html',
  styleUrls: ['./foruns-cadastrados.component.scss']
})

export class ForunsCadastradosComponent implements OnInit {

  constructor(private forumService: ForumService,public dialog: MatDialog) { }

  panelOpenState = false;
  foruns: any[] = [];
  edit = false;
  openDialog(forum): void {
    const dialogRef = this.dialog.open(ForumModalComponent, {
      width: '600px',
      data: {title: forum.title, body: forum.body, id: forum.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit(): void {
    this.forumService.getAllForuns().subscribe(
      result => {
        this.foruns = result.forum;
      }
    );
  }
  excluir(id): void {
      this.forumService.deleteForum(id).subscribe(
        result => {
          console.log(result);
        }
      );
      location.reload();
    }
    editar(forum) {
      this.edit = true;
    }
}
