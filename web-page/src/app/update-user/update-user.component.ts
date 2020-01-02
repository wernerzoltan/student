import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.user = new User();
    this.id = this.route.snapshot.params.id;

    this.userService.getUser(this.id).subscribe(data => {this.user = data; });

  }

  updateUser() {
    this.userService.updateUser(this.id, this.user).subscribe(data =>  {alert('User updated');
                                                                        this.goToList(); });
  }

  onSubmit() {
    this.updateUser();
  }

  goToList() {
    this.router.navigate(['/update']);
  }

}
