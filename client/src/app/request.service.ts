import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // handleSignUp (data:any) :Observable {
    
  // }
}
