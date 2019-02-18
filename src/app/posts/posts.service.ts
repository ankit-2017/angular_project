import {Post} from './post.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  constructor(private http: HttpClient) {}


  getPosts() {
    this.http.get<{status: number, error: string, data: [], message: string}>('http://localhost:5000/api/v1/get-posts')
    .subscribe((postData) => {
        this.posts = postData.data;
        this.postsUpdated.next([...this.posts]);
    });
  }

  getPostUpdateListner() {
    return this.postsUpdated.asObservable();
  }

  addPost(post: Post) {
    const newPosts: Post = { id: post.id, title: post.title, content: post.content };
    this.http.post<{postId: string, data: [], message: string}>('http://localhost:5000/api/v1/add-post', newPosts)
    .subscribe((response) => {
      console.log('post response', response.message);
      newPosts.id = response.postId;
      this.posts.push(newPosts);
      this.postsUpdated.next([...this.posts]);
    });

  }

  DeletePost(postId: string) {
    this.http.delete('http://localhost:5000/api/v1/delete-post/' + postId)
    .subscribe((response) => {
      // console.log('post deleted', response);
      this.getPosts();
    });

  }
}
