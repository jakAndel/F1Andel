import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FindingDriversService {

  constructor(private http: HttpClient) { }

  public getDriver(text: String)
{
return this.http.get('http://ergast.com/api/f1/drivers/'+text+'.json');
}
}
