import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RaceDateService {

  constructor(private http: HttpClient) { }

  public getRaceDate()
{
return this.http.get('https://ergast.com/api/f1/2022/next.json');
}
}
