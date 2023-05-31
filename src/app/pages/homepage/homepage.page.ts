import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { RaceDateService } from 'src/app/api/race-date.service';
import * as  moment  from 'moment-timezone';
import { getCode, getName } from 'country-list';
import { ModalController } from '@ionic/angular';
import { WeekendTimePage } from './weekend-time/weekend-time.page';



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

  firstPracticeDate: String = ''
  firstPracticeDOW: string = ''
  firstPracticeTime: String = ''
  secondPracticeDate: String = ''
  secondPracticeDOW: string = ''
  secondPracticeTime: String = ''
  thirdPracticeDate: String = ''
  thirdPracticeDOW: string = ''
  thirdPracticeTime: String = ''
  QualifyingDate: String = ''
  QualifyingDOW: string = ''
  QualifyingTime: String = ''
  SprintDate: String = ''
  SprintDOW: string = ''
  SprintTime: String = ''
  RaceTime: String = ''
  RaceDOW: string = ''
  private isCurrentlyRunning: boolean = false;

  public timeDifference;
  public secondsToDday;
  public minutesToDday;
  public hoursToDday;
  public daysToDday;

  constructor(private modalController: ModalController, private raceDateService: RaceDateService) 
{
  moment.locale('cs');
  this.raceDateService.getRaceDate().subscribe( (data:any) =>
  {
    var races = data['MRData']['RaceTable']['Races'];
    const now = new Date();

    const futureRaces = races.filter(race => {
      const raceDateTime = new Date(`${race.date} ${race.time}`);
      return raceDateTime > now;
    });
    
    if (futureRaces.length > 0) {
      const closestRace = futureRaces.reduce((closest, race) => {
        const raceDateTime = new Date(`${race.date} ${race.time}`);
        const closestDateTime = new Date(`${closest.date} ${closest.time}`);
        return raceDateTime < closestDateTime ? race : closest;
      });
    
      data = closestRace;
    } else {
      this.jmenoZavodu = undefined;
      return;
    }

    this.jmenoZavodu = data['raceName'];
    this.cisloZ = data['round'];
    this.sezona = data['season'];
    this.mestoZavodu = data['Circuit']['Location']['locality'];
    this.zemeZavodu = data['Circuit']['Location']['country'];
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
    this.casZavodu = data['time'];
    this.denZavodu = data['date'];
    var cas = this.denZavodu + " " + this.casZavodu;
    this.novyCas = moment.tz(cas, "Europe/Prague").format('YYYY-MM-DD HH:mm:ss');
    this.novyCasD = moment(cas).format('LL');
    this.RaceDOW = moment(this.novyCasD.toString(), 'LL').format('dddd');
    this.novyCasH = moment.tz(cas, "Europe/Prague").format('HH:mm');
    this.dDay = new Date(this.novyCas);

    this.firstPracticeDate = moment.tz(
      data['FirstPractice']['date'],
      'YYYY-MM-DD',
      'Europe/Prague'
    ).format('LL');

    this.firstPracticeDOW = moment(this.firstPracticeDate.toString(), 'LL').format('dddd');
    
    this.secondPracticeDate = moment.tz(
      data['SecondPractice']['date'],
      'YYYY-MM-DD',
      'Europe/Prague'
    ).format('LL');

    this.secondPracticeDOW = moment(this.secondPracticeDate.toString(), 'LL').format('dddd');
    
    if (data['ThirdPractice']) {
      this.thirdPracticeDate = moment.tz(
        data['ThirdPractice']['date'],
        'YYYY-MM-DD',
        'Europe/Prague'
      ).format('LL');
    }

    this.thirdPracticeDOW = moment(this.thirdPracticeDate.toString(), 'LL').format('dddd');
    
    this.QualifyingDate = moment.tz(
      data['Qualifying']['date'],
      'YYYY-MM-DD',
      'Europe/Prague'
    ).format('LL');

    this.QualifyingDOW = moment(this.QualifyingDate.toString(), 'LL').format('dddd');
    
    const firstPracticeStartTime = moment.utc(
      data['FirstPractice']['time'],
      'HH:mm:ss'
    ).tz('Europe/Prague');
    
    const firstPracticeEndTime = moment.utc(
      data['FirstPractice']['time'],
      'HH:mm:ss'
    ).add(1, 'hour').tz('Europe/Prague');
    
    this.firstPracticeTime = `${firstPracticeStartTime.format('HH:mm')} - ${firstPracticeEndTime.format('HH:mm')}`;
    
    const secondPracticeStartTime = moment.utc(
      data['SecondPractice']['time'],
      'HH:mm:ss'
    ).tz('Europe/Prague');
    
    const secondPracticeEndTime = moment.utc(
      data['SecondPractice']['time'],
      'HH:mm:ss'
    ).add(1, 'hour').tz('Europe/Prague');
    
    this.secondPracticeTime = `${secondPracticeStartTime.format('HH:mm')} - ${secondPracticeEndTime.format('HH:mm')}`;
    
    if (data['ThirdPractice']) {
      const thirdPracticeStartTime = moment.utc(
        data['ThirdPractice']['time'],
        'HH:mm:ss'
      ).tz('Europe/Prague');
    
      const thirdPracticeEndTime = moment.utc(
        data['ThirdPractice']['time'],
        'HH:mm:ss'
      ).add(1, 'hour').tz('Europe/Prague');
    
      this.thirdPracticeTime = `${thirdPracticeStartTime.format('HH:mm')} - ${thirdPracticeEndTime.format('HH:mm')}`;
    }
    
    
    const qualifyingStartTime = moment.utc(
      data['Qualifying']['time'],
      'HH:mm:ss'
    ).tz('Europe/Prague');
    
    const qualifyingEndTime = moment.utc(
      data['Qualifying']['time'],
      'HH:mm:ss'
    ).add(1, 'hour').tz('Europe/Prague');
    
    this.QualifyingTime = `${qualifyingStartTime.format('HH:mm')} - ${qualifyingEndTime.format('HH:mm')}`;

    const raceStartTime = moment.utc(
      data['time'],
      'HH:mm:ss',
      'Europe/Prague'
    ).tz('Europe/Prague');
    
    const raceEndTime = moment.utc(
      data['time'],
      'HH:mm:ss',
      'Europe/Prague'
    ).add(2, 'hours').tz('Europe/Prague');;
    
    this.RaceTime = `${raceStartTime.format('HH:mm')} - ${raceEndTime.format('HH:mm')}`;    

    if (data.hasOwnProperty('Sprint')) {
      this.SprintDate = moment.utc(data['Sprint']['date'], 'YYYY-MM-DD').format('LL');
      this.SprintDOW = moment(this.SprintDate.toString(), 'LL').format('dddd');
      const SprintStartTime = moment.utc(
        data['Sprint']['time'],
        'HH:mm:ss'
      ).tz('Europe/Prague');
      
      const SprintEndTime = moment.utc(
        data['Sprint']['time'],
        'HH:mm:ss'
      ).add(1, 'hour').tz('Europe/Prague');
      
      this.SprintTime = `${SprintStartTime.format('HH:mm')} - ${SprintEndTime.format('HH:mm')}`;
    }
    
  const raceStart = moment.tz(this.novyCas, "Europe/Prague").toDate();
  const raceEnd = moment.tz(this.novyCas, "Europe/Prague").add(2, 'hours').toDate();

  this.isCurrentlyRunning = now >= raceStart && now <= raceEnd;
  });
}

private getTimeDifference() {
  if (this.dDay) {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }
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

 async openModal() {
  const modal = await this.modalController.create({
    component: WeekendTimePage,
    componentProps: {
      firstPracticeDate: this.firstPracticeDate,
      firstPracticeTime: this.firstPracticeTime,
      firstPracticeDOW: this.firstPracticeDOW,
      secondPracticeDate: this.secondPracticeDate,
      secondPracticeTime: this.secondPracticeTime,
      secondPracticeDOW: this.secondPracticeDOW,
      thirdPracticeDate: this.thirdPracticeDate,
      thirdPracticeTime: this.thirdPracticeTime,
      thirdPracticeDOW: this.thirdPracticeDOW,
      qualifyingDate: this.QualifyingDate,
      qualifyingTime: this.QualifyingTime,
      QualifyingDOW: this.QualifyingDOW,
      novyCasD: this.novyCasD,
      RaceTime: this.RaceTime,
      RaceDOW: this.RaceDOW,
      SprintDate: this.SprintDate,
      SprintTime: this.SprintTime,
      SprintDOW: this.SprintDOW,
    },
  });
  return await modal.present();
}

}

