import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacesInSeasonService {

  constructor(private http: HttpClient) { }

  public getAllRacesInSeason()
{
return this.http.get('https://ergast.com/api/f1/2022.json');
}
}
