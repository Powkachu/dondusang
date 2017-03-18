import { Injectable }        from '@angular/core';
import { Headers }           from '@angular/http';
import { Http }              from '@angular/http';
import { Response }          from '@angular/http';
import { RequestOptions }    from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User }              from '../../models/user';

@Injectable()
export class SignUpService
{
  constructor(private http: Http) {}

  signUp(username: string, password: string, rhesus: string)
  {
    let user =
    {
        user:
        {
            username : username,
            password : password,
            rhesus   : rhesus
        }
    }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url: string = 'http://hhc-2017.scalingo.io/sign_up';

    return this.http.post(url, user, options)
        .map(function (res: Response)
        {
            return res.json() as User;
        })
        .catch((error: any) => Observable.throw(error.json().Message || 'Server error'));
  }

}
