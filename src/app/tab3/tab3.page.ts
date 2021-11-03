import { Component, OnInit } from '@angular/core';
import {DriversStandings} from '../api/driver-standings.service';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

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
  myArr=[]

  

  constructor(private driversStandings: DriversStandings,public loadingController: LoadingController) 
{

  
  this.driversStandings.getDriverStandings().subscribe( (data:any) =>
  {
    this.position = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['position'];
    this.firstName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['givenName'];
    this.lastName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['familyName'];
    this.points = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['points'];
    this.teamName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Constructors'][0]['name'];
    
  });
}

ngOnInit(){
}



}
