import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriversStandings {

  constructor(private http: HttpClient) { }

  public getDriverStandings()
{
return this.http.get('https://ergast.com/api/f1/current/driverStandings.json');
}
}
