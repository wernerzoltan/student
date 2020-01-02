import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  userlist: Observable<User[]>;

  // Router: A service that provides navigation and URL manipulation capabilities
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {this.users = data; });
  }

  deleteUser(user: User): void {
    this.userService.deleteUsers(user).subscribe(data => {
      console.log(data);
      this.refresh();
    },
    error => console.log(error));

  }

  userDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  refresh() {
    this.userlist = this.userService.getUsers();
  }

}
