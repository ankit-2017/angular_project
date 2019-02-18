import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  private postId: string;

  constructor( public Route: ActivatedRoute ) {}

  ngOnInit() {
    this.Route.paramMap.subscribe((param: ParamMap) => {
        if (param.has('postId')) {
          this.postId = param.get('postId');
          console.log('post id', this.postId);
        }
    });
  }
}
