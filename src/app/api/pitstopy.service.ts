import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PitstopyService {

  constructor(private http: HttpClient) { }

  public getPitStops(sezona: String, zavod: String, jezdec: String)
{
return this.http.get('https://ergast.com/api/f1/'+sezona+'/'+zavod+'/drivers/'+jezdec+'/pitstops.json');

}
}
