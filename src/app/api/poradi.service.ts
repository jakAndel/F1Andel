import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoradiService {

  constructor(private http: HttpClient) { }

  public getDriversStandings(sezona: String)
  {
    if (sezona === new Date().getFullYear().toString()) {
      return this.http.get('https://ergast.com/api/f1/current/driverStandings.json');
    } else {
      return this.http.get('assets/data/driverStandings/' + sezona + '_driversStandings.json');
    }
    
  }
  public getConstructorsStandings(sezona: String)
  {
    if (sezona === new Date().getFullYear().toString()) {
      return this.http.get('https://ergast.com/api/f1/current/constructorStandings.json');
    } else {
      return this.http.get('assets/data/constructorStandings/' + sezona + '_constructorStandings.json');
    }
  }
}
