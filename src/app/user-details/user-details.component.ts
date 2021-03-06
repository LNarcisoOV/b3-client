import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;
 
  constructor(private userService: UserService, private listComponent: UserListComponent) { }
 
  ngOnInit() {
  }
 
  updateUser() {
    this.userService.updateUser(this.user.userId,
      { companyId: this.user.companyId, 
        email: this.user.email, 
        birthdate: this.user.birthdate })
      .subscribe(
        data => {
          console.log(data);
          this.user = data as User;
        },
        error => console.log(error));
  }

  deleteUser() {
    this.userService.deleteUser(this.user.userId)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
