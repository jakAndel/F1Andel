import { Component, OnInit } from '@angular/core';
import { CircuitService } from 'src/app/api/circuit.service';
import { LoadingController } from '@ionic/angular';
import { getCode, getName } from 'country-list';
import * as CountryQuery from 'country-query';

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.page.html',
  styleUrls: ['./circuits.page.scss'],
})
export class CircuitsPage implements OnInit {
  FirstGP: any
  Laps: any
  CircuitLength:any
  RaceLength: any
  TrackRecordDriver: any
  TrackRecordTime: any
  circuits: any
  trat: any
  isVisible = false;
  filteredCircuit: any
  isDisabled = true;

  constructor(private circuitService: CircuitService,public loadingController: LoadingController) { 
    this.circuitService.getCircuits().subscribe((data: any) => {
      this.circuits = data['MRData']['CircuitTable']['Circuits'];
      console.log(this.circuits);
      this.circuits.forEach(function(a) {
        a.vlajka = a.Location.country;
        if (a.vlajka === "UAE") {
          a.vlajka = "ae";
        }
        else if (a.vlajka === "Russia") {
          a.vlajka = "ru";
        }
        else if (a.vlajka === "USA") {
          a.vlajka = "us";
        }
        else if (a.vlajka === "United States") {
          a.vlajka = "us";
        }
        else if (a.vlajka === "UK") {
          a.vlajka = "gb";
        }
        else {
          console.log(a.vlajka);
          a.vlajka = getCode(a.vlajka).toLowerCase();
        }
    a.vlajka = a.vlajka.toLowerCase();
      });
    });
  }

  ngOnInit() {
  }

 Trat($event)
  {
    this.isVisible = true;
    this.isDisabled = false;
  }



  public btnFindClicked(): void {
    this.filteredCircuit = [];
  
    this.circuitService.getCircuitsStats().subscribe((data: any) => {
      const fc = data[this.trat];
      this.FirstGP = fc[0]['FirstGP'];
      this.Laps = fc[0]['Laps'];
      this.CircuitLength = fc[0]['circuitLength'];
      this.RaceLength = fc[0]['raceLength'];
      this.TrackRecordDriver = fc[0]['trackRecord'];
      this.TrackRecordTime = fc[0]['trackRecordTime'];
      this.filteredCircuit = fc;
      
  
      this.circuitService.getCircuits().subscribe((data: any) => {
        this.circuits = data['MRData']['CircuitTable']['Circuits'];
  
        const oneCircuit = this.circuits.filter((circuit: any) => circuit.circuitId === this.trat);
        this.filteredCircuit.cId = oneCircuit[0]['circuitId'];
        this.filteredCircuit.cName = oneCircuit[0]['circuitName'];
        this.filteredCircuit.country = oneCircuit[0]['Location']['country'];
        this.filteredCircuit.city = oneCircuit[0]['Location']['locality'];
        if (this.filteredCircuit.country === "UAE") {
          this.filteredCircuit.vlajka = "ae";
        }
        else if (this.filteredCircuit.country === "Russia") {
          this.filteredCircuit.vlajka = "ru";
        }
        else if (this.filteredCircuit.country === "USA") {
          this.filteredCircuit.vlajka = "us";
        }
        else if (this.filteredCircuit.country === "UK") {
          this.filteredCircuit.vlajka = "gb";
        }
        else {
          this.filteredCircuit.vlajka = getCode(this.filteredCircuit.country).toLowerCase();
        }
      });
    });
  }
  
  
}
