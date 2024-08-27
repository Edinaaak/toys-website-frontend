import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  constructor() { }

  @Input() comment: any;
  ngOnInit(): void {
  }

}
