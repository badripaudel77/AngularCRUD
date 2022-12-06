import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import urls from "../constants/ServerURL";
import {Observable} from "rxjs";
import {LoggerService} from "./logger.service";

// If another service needs to be injected in this service, @Injectable() is required.
// For example, LoggerService is injected here.
@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderUserService {

  constructor(private http:HttpClient, private loggerService: LoggerService) { }

   loadUsers():Observable<any> {
     let respObservable = this.http.get(`${urls.jsonPlaceholderBaseURL}/users`);
     this.loggerService.log("Users from the API fetched.", 'INFO');
     return respObservable;
  }

}
