import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  employee: Employee;
  user: User = new User();
  constructor(private loginuserservice: LoginuserService, private _route: Router) { }

  ngOnInit() {
  }

  userLogin() {
    this.loginuserservice.loginUser(this.user).subscribe(data => {
      localStorage.setItem("empDetails", JSON.stringify(data));


      if (data['userType'] == 'donor') {
        this._route.navigate(['/donorHome'])
      }
      else if (data['userType'] == 'charity') {
        console.log('====333=====> ', data['userType'])
        this._route.navigate(['/charityHome']);
      }

    }, error => alert("Please Enter Correct Email ID and Password!!"));
  }

}
