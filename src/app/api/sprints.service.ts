import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SprintsService {

  constructor(private http: HttpClient) { }

  public getSprints1(sezona: String, zavodK: String)
{
  return this.http.get('https://ergast.com/api/f1/'+sezona+'/'+zavodK+'/sprint.json');
}

public getSprints2(sezona: String, jezdec: String)
{
  return this.http.get('https://ergast.com/api/f1/'+ sezona+'/drivers/' + jezdec + '/sprint.json');
}

public getSprints3(sezona: String, zavodK: String, jezdec: String)
{
  return this.http.get('https://ergast.com/api/f1/'+ sezona+'/' +zavodK+ '/drivers/' + jezdec + '/sprint.json');
}

  public getRaces(sezona: String) {
    return this.http.get('assets/data/races/' + sezona + '.json');
  }

  public getDrivers(sezona: String)
  {
  return this.http.get('assets/data/drivers/' + sezona + '_drivers.json');
  }
}
