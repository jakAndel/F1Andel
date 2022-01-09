import { Component } from '@angular/core';
import { RacesInSeasonService } from '../api/races-in-season.service';
import * as  moment  from 'moment-timezone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name:String = ''
  zavody = []
  z: any
  casy:any
  dny:any
  dnyP =[]
  casyP = []
  casyE:any
    constructor(private racesInSeasonService: RacesInSeasonService) 
{
  moment.locale('cs');
  this.racesInSeasonService.getAllRacesInSeason().subscribe( (data) =>
  {
    this.zavody = data['MRData']['RaceTable']['Races'];
  });

  
}
  }


