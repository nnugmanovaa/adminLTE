import {Component, OnInit} from '@angular/core';
import {Post} from '../../../../../../core/models/entites/post';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../../../../core/services/post-service';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  public postId: number;
  public post: Post;

  constructor(private route: ActivatedRoute,
              private router: Router,
              public postService: PostService) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      mergeMap(perf => {
        this.postId = perf.id;
        return this.postService.getById(this.postId);
      })
    ).subscribe(perf => {
      this.post = perf;
    }, err => {
      console.log(err);
    });
  }

  updatePost(post: Post) {
    this.postService.updatePost(this.postId, post.title, post.description).subscribe(perf => {
      this.post = perf;
      this.router.navigateByUrl('/posts');
    }, err => {
      console.log(err);
    });
  }
}
