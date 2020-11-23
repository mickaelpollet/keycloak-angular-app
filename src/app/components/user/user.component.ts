import { Component, OnInit } from '@angular/core';

// Import des services
import { SecurityService } from '../../services/security.service';

export class User {
  id: string ;
  login: string;
  mail: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  currentUser: any;
  currentUSerAllowOrigins: any;

  constructor(public SecurityService: SecurityService) {
    this.currentUser = this.SecurityService.userIdentity.tokenParsed;
    console.log(this.currentUser);
  }

  ngOnInit(): void {
  }

}