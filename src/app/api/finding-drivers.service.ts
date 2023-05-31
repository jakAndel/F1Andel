import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FindingDriversService {

  constructor(private http: HttpClient) { }

  public getDriver(text: String) {
    return this.http.get('https://ergast.com/api/f1/drivers/'+text+'.json');
  }

  getDrivers(): Observable<any> {
    return this.http.get('assets/data/drivers.json');
  }

  howManyWDC(driverId: string): Observable<number> {
    return this.http.get('assets/data/champions.json').pipe(
      map((data) => {
        const driverStandings = data['MRData']['StandingsTable']['StandingsLists'];
        let count = 0;
        for (let i = 0; i < driverStandings.length; i++) {
          const driver = driverStandings[i]['DriverStandings'][0]['Driver'];
          if (driver['driverId'] === driverId) {
            count += 1;
          }
        }
        return count;
      })
    );
  }
  
}
