import { Injectable }        from '@angular/core';
import { Headers }           from '@angular/http';
import { Http }              from '@angular/http';
import { Response }          from '@angular/http';
import { RequestOptions }    from '@angular/http';
import { URLSearchParams }    from '@angular/http';

import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Entity }              from '../../models/entity';

@Injectable()
export class EntityService
{
  constructor(private http: Http) {}

  getNearest(longitude:number, latitude:number) : Observable<Entity>
  {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let params = new URLSearchParams();
    params.append('longitude', longitude.toString());
    params.append('latitude', latitude.toString());
    let options = new RequestOptions({ search: params, headers: headers });
    let url: string = 'http://hhc-2017.scalingo.io/entities/nearest';

    return this.http.get(url, options)
      .map(function (res: Response)
      {
        return res.json() as Entity;
      })
      .catch((error: any) => Observable.throw('Server Error'));
  }
}
