import { Component, OnInit } from '@angular/core';
import {DriversStandings} from '../api/driver-standings.service';
import { LoadingController } from '@ionic/angular';
import { of } from 'rxjs'; 
import * as CountryQuery from 'country-query';
import { getCode, getName } from 'country-list';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  obj: object =null
  loadingDialog: any
  countries: any=[]
  firstName:String = ''
  lastName:String = ''
  position:String = ''
  points:String = ''
  teamName:String = ''
  code:String = ''
  codeF:String = ''
  poleJ=[]
  vlajkaKOD: String = ''
  zK: any
  zK2:any
  narodnost = []

  

  constructor(private driversStandings: DriversStandings,public loadingController: LoadingController) 
{

  
  this.driversStandings.getDriverStandings().subscribe( (data:any) =>
  {
    this.poleJ = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
    this.position = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['position'];
    this.firstName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['givenName'];
    this.lastName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['familyName'];
    this.points = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['points'];
    this.teamName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Constructors'][0]['name'];
    this.code = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['code'];
    this.codeF = "assets/fotky/" + this.code + ".png"

    this.poleJ.forEach(function(a) {
      a.vlajka = a.Driver.nationality;
      if(a.vlajka === "Dutch")
      {
        a.vlajka = "nl";
      }
      else if(a.vlajka === "British")
      {
        a.vlajka = "gb";
      }
      else if(a.vlajka === "Rhodesian")
      {
        a.vlajka = "zw";
      }
      else if(a.vlajka === "French")
      {
        a.vlajka = "fr";
      }
      else if(a.vlajka === "Indian")
      {
        a.vlajka = "in";
      }
      else if(a.vlajka === "American")
      {
        a.vlajka = "us";
      }
      else
      {
        a.vlajka = CountryQuery.find('demonyms', a.vlajka);
        a.vlajka = a.vlajka.cca2;
      }
      a.vlajka = a.vlajka.toLowerCase();
    });
 
    
  });


}

ngOnInit(){
}



}
