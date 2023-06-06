import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/User';
import { Store } from '@ngrx/store';
import { login } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-nbp';
  user: User = {} as User;

  constructor(private store: Store<User>) {}

  ngOnInit(): void {
    const userStorage = localStorage.getItem('user')
    this.user = userStorage !== null ? JSON.parse(userStorage) : null;
    this.store.dispatch(login(this.user))
  }
}
