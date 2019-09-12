import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { API_DOMAIN, HTTP_HEADER, HTTP_HEADER_LOGIN } from 'src/app/shared/constant';
import { IAccount } from 'src/app/interfaces/web-client/account-wc.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
loginFormControl = {
  // name: [null, [Validators.required, Validators.maxLength(255)]],
  username: [null, [Validators.required]],
  password: [null, [Validators.required]]
}
  constructor(
    private http: HttpClient
  ) { }

  trylogin(value): Observable<IAccount>{
    return this.http.post<{token: IAccount}>(
      `${API_DOMAIN}login`,
      value,
      {
        headers: HTTP_HEADER_LOGIN
      }
    ).pipe(
      map(res => {
        return res.token;
      })
    );
  }

  getInfo(){
    console.log("in service")
    return this.http.get(
      `${API_DOMAIN}api/values`,
      {
        headers: HTTP_HEADER
      }
    ).pipe(
      map(res => {
        return res;
      })
    );
  }
}
