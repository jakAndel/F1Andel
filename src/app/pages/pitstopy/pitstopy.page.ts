import { Component, OnInit } from '@angular/core';
import { PitstopyService } from 'src/app/api/pitstopy.service';
import { LoadingController } from '@ionic/angular';
import { getCode, getName } from 'country-list';
import * as CountryQuery from 'country-query';
import {FindingDriversService} from 'src/app/api/finding-drivers.service';
import { QTimesService } from 'src/app/api/q-times.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pitstopy',
  templateUrl: './pitstopy.page.html',
  styleUrls: ['./pitstopy.page.scss'],
})
export class PitstopyPage implements OnInit {

  zavodJmeno: String = ""
  zavodMesto: String = ""
  zavodRok: String = ""
  zavodStat: String = ""
  sezony = []
  jezdci = []
  zavody = []
  pS = []
  pitstopy =[]
  velikost: any
  sezona:String = ''
  jezdec: String = ''
  vybranyZ: String = ''
  isDisabled = true;
  isDisabled1 = true;
  isDisabled2 = true;
  isVisible = false;
  firstName: any
  lastName: any
  nationality: any
  celkem: any

  constructor(private alertController: AlertController, private qTimesService: QTimesService, private findDriversService: FindingDriversService,private pService: PitstopyService,public loadingController: LoadingController) {
    const currentYear = new Date().getFullYear();
    this.sezony = this.range(2012, currentYear);
   }
  ngOnInit(): void {
  
  }

   checkPitstops() {
    if (this.pS.length === 0) {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Upozornění',
      message: 'Nebyl nalezen žádný pitstop.',
      buttons: ['OK']
    });
  
    await alert.present();
  }

  range(start, konec) {
    var pole = [];
    for (var i = start; i <= konec; i++) {
        pole.push(i);
    }
    return pole;
}

  jezdciSezona(event){
  
    this.jezdec = null;
    this.vybranyZ = null;
    this.isDisabled = true;
  this.isDisabled1 = true;
  this.isDisabled2 = true;
    this.isVisible = false;
  

      this.qTimesService.getDrivers(this.sezona).subscribe( (data:any) =>
      {
        this.jezdci = data['MRData']['DriverTable']['Drivers'];
        
      });
      this.qTimesService.getRaces(this.sezona).subscribe( (data:any) =>
      {
        this.zavody = data['MRData']['RaceTable']['Races'];
        const currentDate = new Date();
const pastZavody = this.zavody.filter(zavod => {
  const raceDate = new Date(zavod.date);
  return raceDate <= currentDate; 
});
        this.zavody = pastZavody;
        this.zavody.forEach(function(a) {
          a.vlajka = a.Circuit.Location.country;
          if(a.vlajka === "Netherlands")
        {
          a.vlajka = "nl";
        }
        else if(a.vlajka === "UK")
        {
          a.vlajka = "gb";
        }
        else if(a.vlajka === "France")
        {
          a.vlajka = "fr";
        }
        else if(a.vlajka === "India")
        {
          a.vlajka = "in";
        }
        else if(a.vlajka === "United States" || a.vlajka === "USA")
        {
          a.vlajka = "us";
        }
        else if(a.vlajka === "Russia")
        {
          a.vlajka = "ru";
        }
        else if(a.vlajka === "Korea")
        {
          a.vlajka = "kr";
        }
        else if(a.vlajka === "UAE")
        {
          a.vlajka = "ae";
        }
          else
          {
            a.vlajka = getCode(a.vlajka);
          }
          a.vlajka = a.vlajka.toLowerCase();
        });
      });


  }

  zavodC(event){
    this.isDisabled1 = false; 
    if(!this.isDisabled1 && !this.isDisabled2)
    {
      this.isDisabled = false;
    }
    
  }

  jezdecC(event){
    this.isDisabled2 = false; 
    if(!this.isDisabled1 && !this.isDisabled2)
    {
      this.isDisabled = false;
    }
  }

  public btnFindClicked():void
{
  this.pS = [];
    this.zavody = [];
  
  this.pService.getPitStops(this.sezona, this.vybranyZ, this.jezdec).subscribe( (data:any) =>
  {
    this.zavody = data['MRData']['RaceTable']['Races'];
    if (data['MRData']['RaceTable']['Races'][0] && data['MRData']['RaceTable']['Races'][0]['PitStops']) {
      this.pitstopy = data['MRData']['RaceTable']['Races'][0]['PitStops'];
      this.pS = this.pitstopy;
      this.velikost = this.pS.length;
    } else {
      this.pitstopy = [];
      this.pS = this.pitstopy;
      this.velikost = 0;
    }
    this.checkPitstops();
    this.zavody.forEach(function(a) {
      a.vlajka = a.Circuit.Location.country;
      if(a.vlajka === "Netherlands")
    {
      a.vlajka = "nl";
    }
    else if(a.vlajka === "UK")
    {
      a.vlajka = "gb";
    }
    else if(a.vlajka === "France")
    {
      a.vlajka = "fr";
    }
    else if(a.vlajka === "India")
    {
      a.vlajka = "in";
    }
    else if(a.vlajka === "United States" || a.vlajka === "USA")
    {
      a.vlajka = "us";
    }
    else if(a.vlajka === "Russia")
    {
      a.vlajka = "ru";
    }
    else if(a.vlajka === "Korea")
    {
      a.vlajka = "kr";
    }
    else if(a.vlajka === "UAE")
    {
      a.vlajka = "ae";
    }
      else
      {
        a.vlajka = getCode(a.vlajka);
      }
      a.vlajka = a.vlajka.toLowerCase();
    });



    this.findDriversService.getDriver(this.jezdec).subscribe( (data) =>
  {
    
    this.firstName = data['MRData']['DriverTable']['Drivers'][0]['givenName'];
    this.lastName = data['MRData']['DriverTable']['Drivers'][0]['familyName'];
    this.nationality = data['MRData']['DriverTable']['Drivers'][0]['nationality'];

    if(this.nationality === "Dutch")
      {
        this.nationality = "nl";
      }
      else if(this.nationality === "British")
      {
        this.nationality = "gb";
      }
      else if(this.nationality === "Rhodesian")
      {
        this.nationality = "zw";
      }
      else if(this.nationality === "French")
      {
        this.nationality = "fr";
      }
      else if(this.nationality === "Indian")
      {
        this.nationality = "in";
      }
      else if(this.nationality === "American")
      {
        this.nationality = "us";
      }
      else
      {
        this.nationality = CountryQuery.find('demonyms', this.nationality);
        this.nationality = this.nationality.cca2;
      }
      this.nationality = this.nationality.toLowerCase();
      

      
        });
      });
      this.isVisible = true;
      

      
      }
    }
  
 
