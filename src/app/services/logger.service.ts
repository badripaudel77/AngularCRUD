import {Injectable} from "@angular/core";

/**
 * This service is responsible for logging in the App.
 */

@Injectable({
  providedIn: 'root'
})
export class LoggerService{

  constructor() {
  }

  log(messageStr: string, logType: string  = '') {
    let message: string = messageStr;
      switch (logType.toUpperCase()) {
        case 'INFO':
        case 'WARNING' :
        case 'ERROR' :
          message = logType + " ::: " + message;
          break;
        default:
          console.log('default');
          message = "DEBUG ::: " + message;
      }
      console.log(message);
  }
}
