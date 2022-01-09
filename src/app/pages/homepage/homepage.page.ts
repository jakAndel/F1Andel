import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { RaceDateService } from 'src/app/api/race-date.service';
import * as  moment  from 'moment-timezone';
import { getCode, getName } from 'country-list';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit, OnDestroy {

  private subscription: Subscription;
  
  public dateNow = new Date();
  jmenoZavodu: String = ''
  mestoZavodu: String = ''
  zemeZavodu: String = ''
  zemeZavoduK: String = ''
  denZavodu: String = ''
  casZavodu: String = ''
  sezona: String = ''
  cisloZ: String = ''
  novyCas = ""
  novyCasD = ""
  novyCasH = ""
  public dDay;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;

  constructor(private raceDateService: RaceDateService) 
{
  moment.locale('cs');
  this.raceDateService.getRaceDate().subscribe( (data:any) =>
  {
    this.jmenoZavodu = data['MRData']['RaceTable']['Races'][0]['raceName'];
    this.cisloZ = data['MRData']['RaceTable']['Races'][0]['round'];
    this.sezona = data['MRData']['RaceTable']['Races'][0]['season'];
    this.mestoZavodu = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['locality'];
    this.zemeZavodu = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['country'];
    if(this.zemeZavodu === "UAE")
        {
          this.zemeZavoduK = "ae";
        }
        else if(this.zemeZavodu === "Russia")
        {
          this.zemeZavoduK = "ru";
        }
        else if(this.zemeZavodu === "USA")
        {
          this.zemeZavoduK = "us";
        }
        else if(this.zemeZavodu === "UK")
        {
          this.zemeZavoduK = "gb";
        }
        else
        {
          this.zemeZavoduK = getCode(this.zemeZavodu).toLowerCase();
        }
    this.casZavodu = data['MRData']['RaceTable']['Races'][0]['time'];
    this.denZavodu = data['MRData']['RaceTable']['Races'][0]['date'];
    var cas = this.denZavodu + " " + this.casZavodu;
    this.novyCas = moment.tz(cas, "Europe/Prague").format('YYYY-MM-DD HH:mm:ss');
    this.novyCasD = moment(cas).format('LL');
    this.novyCasH = moment.tz(cas, "Europe/Prague").format('HH:mm');
    this.dDay = new Date(this.novyCas);
  });
}


  private getTimeDifference () {
      this.timeDifference = this.dDay.getTime() - new  Date().getTime();
      this.allocateTimeUnits(this.timeDifference);
  }

private allocateTimeUnits (timeDifference) {
      this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
      this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
      this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
      this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}

  ngOnInit() {
     this.subscription = interval(1000)
         .subscribe(x => { this.getTimeDifference(); });
  }

 ngOnDestroy() {
    this.subscription.unsubscribe();
 }

}

