import { Component, OnInit } from '@angular/core';
import {JsonPlaceholderUserService} from "../services/json-placeholder-user.service";
import User from "../models/User";

@Component({
  selector: 'app-fetch-user',
  templateUrl: './fetch-user.component.html',
  styleUrls: ['./fetch-user.component.css']
})
export class FetchUserComponent implements OnInit {

  heading:string = 'Fetch Users from the API';
  errorMessage:string = '';
  users:User[] = [];
  constructor(private jsonPlaceholderUserService: JsonPlaceholderUserService) {}

  ngOnInit(): void {
    // just to mimic the loading of users from the server.
    setTimeout(() => {
      this.jsonPlaceholderUserService.loadUsers().subscribe(response => {
          if(response) {
            this.users = response;
          }
        },
        error => {
          this.errorMessage = error.message;
        });
    }, 3000);
  }

}
