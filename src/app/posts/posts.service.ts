import {Post} from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return this.posts;
  }

  getPostUpdateListner() {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    const newPosts: Post = {title: post.title, content: post.content };
    this.posts.push(newPosts);
    this.postsUpdated.next([...this.posts]);
  }
}
