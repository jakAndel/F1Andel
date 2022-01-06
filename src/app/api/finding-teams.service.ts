import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindingTeamService {

  constructor(private http: HttpClient) { }

  public getTeam(text: String)
{
return this.http.get('https://ergast.com/api/f1/constructors/'+text+'.json');
}
}
