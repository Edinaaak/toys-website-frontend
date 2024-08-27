import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.css']
})
export class CommentAddFormComponent implements OnInit {

  commentForm: FormGroup;
  @Input() id: any;
  @Output() commentAdded = new EventEmitter<void>();
  user : User = {} as User;
  constructor(private fb: FormBuilder,  private commentService: CommentService, private store: Store<{user: User}>
  ) {
    this.commentForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.store.select('user').subscribe((res) => {
      this.user = res
    });
  }

  onSubmit(): void {
    if (this.commentForm.valid) {
      const commentData = {
        ...this.commentForm.value,
        date: new Date().toLocaleString(),
        productId: this.id,
        userId: this.user.painter.id,
        // Capture current date and time
      };
      console.log('Comment Submitted:', commentData);
      this.commentService.createComment(commentData).subscribe((res) => {
        console.log(res);
        this.commentAdded.emit();
        alert('Comment added successfully');
      }
      );
      this.commentForm.reset(); // Reset the form after submission
    }
  }


}
