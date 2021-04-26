import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit(): void {

  }
  login(loginDetails: any) {
    // console.log(loginDetails);
    if (loginDetails.username == "" || loginDetails.password == "") {
      alert("Please enter username and password");
    }
    else {
      this.router.navigate(["/user"]);
    }
  }
}
