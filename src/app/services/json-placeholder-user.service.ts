import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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
  searchQuery: String = '';
   loadUsers():Observable<any> {
     let respObservable = this.http.get(
        `${urls.jsonPlaceholderBaseURL}/users`,
       {
              headers : new HttpHeaders({ 'my-custom-header' : "custom-header-value" }),
              params: new HttpParams().set("searchQuery", `${this.searchQuery}`) // either set here or append in the url
         }
       );
     this.loggerService.log("Users from the API fetched.", 'INFO');
     return respObservable;
  }

}
