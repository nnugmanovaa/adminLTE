import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../../../../core/services/post-service';
import {Post} from '../../../../../../core/models/entites/post';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.findAll().subscribe(perf => {
      this.posts = perf;
    }, err => {
      console.log(err);
    });
  }

  deletePost(id) {
    this.postService.deleteById(id).subscribe(perf => {
      this.posts = this.posts.filter(e => e.id !== id);
    }, err => {
      console.log(err);
    });
  }
}
