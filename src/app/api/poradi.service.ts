import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoradiService {

  constructor(private http: HttpClient) { }

  public getDriversStandings(sezona: String)
  {
  return this.http.get('https://ergast.com/api/f1/'+sezona+'/driverStandings.json');
  }
  public getConstructorsStandings(sezona: String)
  {
  return this.http.get('https://ergast.com/api/f1/'+sezona+'/constructorStandings.json');
  }
}
