import { Component, OnInit } from '@angular/core';
import {JsonPlaceholderUserService} from "../services/json-placeholder-user.service";
import {UserModel} from "../models/User.model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-fetch-user',
  templateUrl: './fetch-user.component.html',
  styleUrls: ['./fetch-user.component.css']
})
/**
 * Form using reactive approach
 * In reactive approach , validators are defined in typescript code not in template.
 */
export class FetchUserComponent implements OnInit {

  heading:string = 'Fetch Users from the API';
  errorMessage:string = '';
  users:UserModel[] = [];
  inputType: string = 'text';

  /**
   * FormControl applies to the element [for eg: input element]
   * We can also use FormGroup to group form elements.
   */
  searchInputString: FormControl = new FormControl('');

  /**
   * FormGroup applies to the element [for eg: input element]
   * We can also use FormGroup to group form elements.
   */
  searchInputStringGroup: FormGroup = new FormGroup({
    'searchInputElGroup' : new FormControl(''),
    // ... others if more ...
    'tags': new FormArray([])
  });
  isValid: boolean = true;
  searchedUser: any = null;

  constructor(private jsonPlaceholderUserService: JsonPlaceholderUserService) {}

  ngOnInit(): void {
    // just to mimic the loading of users from the server.
    setTimeout(() => {
      console.log("fetching user ...");
      this.jsonPlaceholderUserService.loadUsers().subscribe(response => {
          if(response) {
            this.users = response;
          }
        },
        error => {
          this.errorMessage = error.message;
        });
    }, 1000);
  }

  /**
   *  Using form control on single element
   *   searchUsers() {
   *     if(!this.searchInputString.value) {
   *       this.searchedUser = null;
   *       return;
   *     }
   *     console.log(" >> ", this.searchInputString);
   *      this.searchedUser = this.users.find((user) => {
   *       return user.username.toLowerCase().includes(this.searchInputString.value.toLowerCase());
   *     });
   *   }
   */

  /**
   * Using form group on form elements
   */
  searchUsers() {
    if(!this.searchInputStringGroup.value.searchInputElGroup) {
      this.searchedUser = null;
      return;
    }
     this.searchedUser = this.users.find((user) => {
      return user.username.toLowerCase().includes(this.searchInputStringGroup.value.searchInputElGroup.toLowerCase());
    });
  }

}
