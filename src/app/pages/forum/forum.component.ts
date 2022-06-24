import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  foruns:any[] = [];

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.getAllForuns().subscribe(
      result => {
        this.foruns = result.forum;
      }
    );
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
        const aux = this.forumService.create(this.forumForm.value.title,this.forumForm.value.content).subscribe(res => {
          console.log(res);
        });
    }
  }
  cancel(): void{
    
  }
}
