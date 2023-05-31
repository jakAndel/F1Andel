import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RaceDateService {

  constructor(private http: HttpClient) { }

  public getRaceDate()
  {
    const currentYear  = new Date().getFullYear();
    return this.http.get('assets/data/races/' + currentYear + '.json');
  }
}
