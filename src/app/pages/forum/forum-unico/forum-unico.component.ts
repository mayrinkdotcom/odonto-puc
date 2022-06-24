import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForumService } from 'src/app/services/forum.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forum-unico',
  templateUrl: './forum-unico.component.html',
  styleUrls: ['./forum-unico.component.scss']
})
export class ForumUnicoComponent implements OnInit, OnDestroy {

  forumId: number;
  forum: {
    id: number,
    title: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    answers: any[],
  };

  loading: boolean = false;
  loadingNewAnswer: boolean = false;

  subscriptions: Subscription[] = [];
  createForumAnswerForm: FormGroup = new FormGroup({
    content: new FormControl('')
  });

  newForumAnswer: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private forumService: ForumService
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.route.queryParams
      .subscribe(params => this.forumId = params.forumId);
    
    const sub = this.forumService.getById(this.forumId).subscribe(res => {
      this.loading = false;
      this.forum = {
        ...res.forum,
        answers: [],
      };
    })
    this.subscriptions.push(sub);

    this.getForumAnswers();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getForumAnswers() {
    const sub = this.forumService.getForumAnswers(this.forumId).subscribe(res => {
      this.loading = false;
      this.forum.answers = res.forumAnswers;
    })
    this.subscriptions.push(sub);
  }

  onSubmit(): void {
    if (this.newForumAnswer) {
      try {
        this.loadingNewAnswer = true;
        const body = this.createForumAnswerForm.get('content').value;
        const sub = this.forumService.createAnswer(body,this.forumId).subscribe(res => {
          this.loadingNewAnswer = false;
          this.getForumAnswers();
        });
        this.subscriptions.push(sub);
      } catch (error) {
        console.error('ERROR on CreatePostComponent', error);
        throw error;
      }
    } else {
      this.newForumAnswer = true;
    }
  }

  goTo(path: string) {
    this.router.navigate([path])
  }

}
