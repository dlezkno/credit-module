import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class CreditService {
  header:HttpHeaders = new HttpHeaders().set('Content-Type','application/json;charset=utf-8');
  url:string = environment.url_credit;
  constructor(private http: HttpClient){

  }

  add($data){
    let data = JSON.stringify($data)
    return this.http.post(this.url, data, {headers:this.header}).map(resp =>{
      return resp;
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return ('An error occurred:'+ error.error.message);
    } else {
      return (
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
  };

}
