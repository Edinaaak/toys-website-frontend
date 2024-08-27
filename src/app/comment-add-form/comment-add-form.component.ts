import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.css']
})
export class CommentAddFormComponent implements OnInit {

  commentForm: FormGroup;
  @Input() id: any;
  @Output() commentAdded = new EventEmitter<void>();
  user: any;
  constructor(private fb: FormBuilder,  private commentService: CommentService, private store: Store<{User: any}>
  ) {
    this.commentForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.store.select('User').subscribe((res) => {
      this.user = res.painter.id;
    });
  }

  onSubmit(): void {
    if (this.commentForm.valid) {
      const commentData = {
        ...this.commentForm.value,
        date: new Date().toLocaleString(),
        productId: this.id,
        userId: 2,
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
