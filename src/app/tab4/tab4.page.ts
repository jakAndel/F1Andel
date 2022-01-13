import { Component, OnInit } from '@angular/core';
import {TeamStandings} from '../api/team-standings.service';
import { LoadingController } from '@ionic/angular';
import { of } from 'rxjs'; 
import * as CountryQuery from 'country-query';

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

  

  constructor(private teamStandings: TeamStandings,public loadingController: LoadingController) 
{

  
  this.teamStandings.getTeamStandings().subscribe( (data:any) =>
  {
    this.poleT = data['MRData']['StandingsTable']['StandingsLists'][0]['ConstructorStandings'];

    this.poleT.forEach(function(a) {
      a.vlajka = a.Constructor.nationality;
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
