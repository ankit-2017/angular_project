import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-craete.component.html',
  styleUrls: ['./post-create.component.css']
})


export class PostCreateComponent {
  enteredValue = '';
  enteredTitle = '';
  // @Output() postCreated = new EventEmitter<Post>();
  constructor( public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      id: null,
      title : form.value.title,
      content: form.value.content
    };
    this.postsService.addPost(post);
    // this.postCreated.emit(post);
  }

}
