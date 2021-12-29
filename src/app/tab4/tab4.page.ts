import { Component, OnInit } from '@angular/core';
import {TeamStandings} from '../api/team-standings.service';
import { LoadingController } from '@ionic/angular';
import { of } from 'rxjs'; 

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
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
  poleT=[]

  

  constructor(private driversStandings: TeamStandings,public loadingController: LoadingController) 
{

  
  this.driversStandings.getTeamStandings().subscribe( (data:any) =>
  {
    this.poleT = data['MRData']['StandingsTable']['StandingsLists'][0]['ConstructorStandings'];
    this.position = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['position'];
    this.firstName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['givenName'];
    this.lastName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['familyName'];
    this.points = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['points'];
    this.teamName = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Constructors'][0]['name'];
    this.code = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'][0]['Driver']['code'];
    this.codeF = "assets/fotky/" + this.code + ".png"
    
  });
}

ngOnInit(){
}



}
