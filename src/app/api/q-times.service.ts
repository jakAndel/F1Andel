import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QTimesService {

  constructor(private http: HttpClient) { }

  public getDrivers(sezona: String)
{
  return this.http.get('assets/data/drivers/' + sezona + '_drivers.json');
}

public getRaces(sezona: String) {
  return this.http.get('assets/data/races/' + sezona + '.json');
}

public getQ(sezona: String, zavodK: String)
{
  return this.http.get('https://ergast.com/api/f1/'+sezona+'/'+zavodK+'/qualifying.json');
}

public getQ2(sezona: String, jezdec: String)
{
return this.http.get('https://ergast.com/api/f1/'+sezona+'/drivers/'+jezdec+'/qualifying.json');
}

public getQ3(sezona: String, zavodK: String, jezdec: String)
{
return this.http.get('https://ergast.com/api/f1/'+sezona+'/'+zavodK+'/drivers/'+jezdec+'/qualifying.json');
}



}




