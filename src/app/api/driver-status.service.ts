import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverStatusService {

  constructor(private http: HttpClient) { }

  public getStatus(text: String)
{
return this.http.get('https://ergast.com/api/f1/drivers/'+text+'/status.json');
}
}
