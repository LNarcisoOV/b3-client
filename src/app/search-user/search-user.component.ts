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
  user: User;
  submitted = false;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.submitted = false;
  }
 
  private searchUser() {
    this.userService.getUser(this.userId)
      .subscribe(user => this.user = user);
      this.submitted = true;
  }
 
  onSubmit() {
    this.searchUser();
  }
}