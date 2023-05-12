import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(public http: HttpClient) { }
  GetSummonerData(): Observable<any> {
    
    return this.http.get('https://jsonblob.com/api/jsonblob/1106202341031559168');
  }
}