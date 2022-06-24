import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-listagem',
  templateUrl: './forum-listagem.component.html',
  styleUrls: ['./forum-listagem.component.scss'],
  viewProviders: [MatExpansionPanel]
})
export class ForumListagemComponent implements OnInit {

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
  }

}
