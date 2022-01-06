import { Component, OnInit } from '@angular/core';
import {DriversStandings} from '../api/driver-standings.service';
import { LoadingController } from '@ionic/angular';
import { of } from 'rxjs'; 
import * as CountryQuery from 'country-query';

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
  nationality:any
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
    this.nationality = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['nationality'];
    console.log(this.nationality);
    this.nationality = CountryQuery.find('demonyms', this.nationality.toString());
    console.log(this.nationality);
    this.nationality = this.nationality[1].cca2.toLowerCase();
    console.log(this.nationality);
 
    
  });

  var data = [{one:1}, {two:2}, {three:3}]
  var result = [];
  
  // read all items of data.
  data.forEach(function(item) {
  
       // read all keys of item.
      Object.keys(item).forEach(function(key) {
          result.push(item[key]);
      });
  
  });


}

ngOnInit(){
}



}
