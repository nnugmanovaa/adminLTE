import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Post} from '../../../../../../core/models/entites/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input()
  post: Post;

  @Output()
  validForm = new EventEmitter<Post>();

  @Output()
  formCancelled = new EventEmitter();

  public postForm: FormGroup;

  constructor(private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.postForm = this.builder.group({
      title: [this.post.title, [Validators.required]],
      description: [this.post.description, [Validators.required]],
    });
  }

  valid() {
    const post = this.postForm.getRawValue() as Post;
    this.validForm.emit(post);
    this.postForm.reset();
  }

  cancel() {
    this.formCancelled.emit('cancel');
  }
}
