import { Injectable }        from '@angular/core';
import { Headers }           from '@angular/http';
import { Http }              from '@angular/http';
import { Response }          from '@angular/http';
import { RequestOptions }    from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ScanService
{
  constructor(private http: Http) {}

  verify(code: string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url: string = 'http://hhc-2017.scalingo.io/meeting';

    return this.http.post(url, {verification : code}, options)
        .map(function (res: Response)
        {
            return res.json();
        })
        .catch((error: any) => Observable.throw(error.json().Message || 'Server error'));
  }

}
