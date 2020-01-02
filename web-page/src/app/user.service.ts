import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable } from 'rxjs';

// ez a JSON átadáshoz kell, hogy a fejléc-ben jelezv legyen hogy JSON-t adunk át
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// dependency-ként be lehet injektálni más osztályokba
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8080/api';
  private getUserUrl = '/students-list';
  private deleteUserUrl = '/delete';
  private createUserUrl = '/create';
  private updateUserUrl = '/update';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl + this.getUserUrl);
  }

  public getUser(id: number): Observable<any>  {
    return this.http.get(this.userUrl + this.getUserUrl + '/' + id);
  }

  public deleteUsers(user: User) {
    return this.http.delete(this.userUrl + this.deleteUserUrl + '/' + user.id);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.userUrl + this.createUserUrl, user);
  }

  public updateUser(id: number, value: any) {
    return this.http.put(this.userUrl + this.updateUserUrl + '/' + {id}, value);
  }

}
