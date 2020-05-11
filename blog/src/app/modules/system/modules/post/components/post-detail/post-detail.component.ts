import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../../../../core/services/post-service';
import {mergeMap} from 'rxjs/operators';
import {Post} from '../../../../../../core/models/entites/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public postId: number;
  public post: Post;

  constructor(private route: ActivatedRoute,
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

}
