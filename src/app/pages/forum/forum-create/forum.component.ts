import { ForumService } from '../../../services/forum.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  foruns:any[] = [];
  router: Router;

  constructor(private forumService: ForumService, router: Router) { this.router = router }
  
  ngOnInit(): void {
    
  }
  forumForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required
    ]),
    content: new FormControl(null, [
      Validators.required
    ])
  });
  salvar():void {
    if (this.forumForm.value) {
        this.forumService.create(this.forumForm.value.title,this.forumForm.value.content).subscribe(res => {
          console.log(res);
          
        });
        this.router.navigate(['/forum']);
    }
  }
  cancel(): void{
    
  }
}
