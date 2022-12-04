import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import urls from "../constants/ServerURL";
import {Observable} from "rxjs";
import {LoggerService} from "./logger.service";


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
