import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverinseasonsService {

  constructor(private http: HttpClient) { }

  public getDriverStandings(text: String)
{
return this.http.get('https://ergast.com/api/f1/drivers/'+text+'/driverStandings.json');
}
}
