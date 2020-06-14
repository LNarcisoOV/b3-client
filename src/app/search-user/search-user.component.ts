import { Component, OnInit } from '@angular/core';
 
import { User } from '../user';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
 
  userId: number;
  user: User[];
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
  }
 
  private searchUser() {
    this.user = [];
    this.userService.getUser(this.userId)
      .subscribe(user => this.user = user);
  }
 
  onSubmit() {
    this.searchUser();
  }
}