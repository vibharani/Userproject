import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../Models/model';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public movies:User[]=[];
  id: any;
  private sub: any;
  url:any;
  imgUrl:any;

  constructor(private route: ActivatedRoute,private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe((data) => {
      this.movies=data;
   })
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });

   this.imgUrl=`https://avatars.githubusercontent.com/u/${this.id}?v=4`;

console.log(this.imgUrl)


  }


}
