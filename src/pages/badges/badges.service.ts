import { Injectable }        from '@angular/core';
import { Headers }           from '@angular/http';
import { Http }              from '@angular/http';
import { Response }          from '@angular/http';
import { RequestOptions }    from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Badge }              from '../../models/badge';

@Injectable()
export class BadgesService
{
  constructor(private http: Http) {}

  getBadges(user_id: number) : Observable<Badge[]>
  {
    let headers = new Headers({ 'Content-Type': 'application/json','UserId': user_id});
    let options = new RequestOptions({ headers: headers });
    let url: string = 'http://hhc-2017.scalingo.io/badges';

    return this.http.get(url, options)
      .map(function (res: Response)
      {
        return res.json() as Badge[];
      })
      .catch((error: any) => Observable.throw('Server Error'));
  }
}
