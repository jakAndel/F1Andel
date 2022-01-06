import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamStandings {

  constructor(private http: HttpClient) { }

  public getTeamStandings()
{
return this.http.get('https://ergast.com/api/f1/current/constructorStandings.json');
}
}

