import { Component, OnInit } from '@angular/core';

// Import des services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  page_title: string = "Private Page";
  page_subject: string = "Private Page";
  page_menu_color: string = "#424242";
  userFirstName: any;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
