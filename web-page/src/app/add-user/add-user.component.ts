import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user: User = new User();

  constructor(private router: Router, private userService: UserService) { }

  createUser() {
    this.userService.createUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.goToList();
  }

  goToList() {
    this.router.navigate(['']);
  }

}
