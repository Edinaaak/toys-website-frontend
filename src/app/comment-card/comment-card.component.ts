import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentService } from '../comment.service';
import { Store } from '@ngrx/store';
import { User } from '../interfaces/User';


@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  constructor(private commentService: CommentService, private User: Store<{user:User}>) { }

  @Input() comment: any;
  @Output() commentDeleted = new EventEmitter<void>();
  user: User = {} as User;
  ngOnInit(): void {
    this.User.select('user').subscribe((res) => {
      console.log(res);
      this.user = res;
    });
  }

  deleteComment(id: any)  {
    this.commentService.deleteComment(id).subscribe((res) => {
      console.log(res);
      this.commentDeleted.emit();
      alert('Comment deleted successfully');
    });

  }


}
