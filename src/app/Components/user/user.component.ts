import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { User } from '../../Models/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public movies:User[]=[];
  id:any;
  url:any;
  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe((data) => {
      this.movies=data;
     console.log(this.movies);
   })
  }

  change(x:any)
  {
    console.log(x);
    this.id=x.id;
    this.url=x.avatar_url;

    this.router.navigate(["/userdetail",this.id]);
  }
}
