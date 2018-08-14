import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { AppGlobals } from '../shared/app.global';


@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  constructor(private _http: Http, private _appGlobal: AppGlobals) { }

  getPopular(){
    const url = this._appGlobal.url + 'movie/popular?api_key=' + this._appGlobal.token + '&language=en-US&page=1';
    return this._http.get(url).pipe(map(response =>{
      return response.json();
    }))
  }
}
