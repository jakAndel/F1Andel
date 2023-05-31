import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CircuitService {

  constructor(private http: HttpClient) { }

  public getCircuits() {
    return this.http.get('assets/data/circuits.json');
  }

  public getCircuitsStats() {
    return this.http.get('assets/data/circuit_stats.json');
  }
}
