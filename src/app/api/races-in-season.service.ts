import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RacesInSeasonService {

  constructor(private http: HttpClient) { }

  public getAllRacesInSeason()
{
return this.http.get('https://ergast.com/api/f1/current.json');
}

hasFutureRaces(): Observable<boolean> {
  return this.http.get('assets/data/2023.json').pipe(
    map((data) => {
      console.log(data);
      const currentDate = new Date();
      const zavody = data['MRData']['RaceTable']['Races'];

      const hasFutureRaces = zavody.some((zavod) => {
        const zavodDate = new Date(zavod.date);
        return zavodDate >= currentDate;
      });
      return hasFutureRaces;
    })
  );
}



}

