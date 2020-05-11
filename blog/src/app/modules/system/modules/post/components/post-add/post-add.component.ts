import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../../../../../core/services/post-service';
import {Post} from '../../../../../../core/models/entites/post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  emptyPost: Post = new Post();

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {

  }


  addPost(post) {
    this.postService.add(post).subscribe(perf => {
      alert('Post successfully added!');
    });
  }

  formCancelled() {
    alert('User pressed cancel button');
  }
}
