import { Component } from '@angular/core';
import {FindingDriversService} from '../api/finding-drivers.service';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import * as moment from 'moment';
import * as CountryQuery from 'country-query';
import {DriverinseasonsService} from '../api/driverinseasons.service';
import {DriverStatusService} from '../api/driver-status.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  name:String = ''
  loadingDialog: any
  firstName:String = ''
  lastName:String = ''
  nationality:any
  DOB:any
  sezony: any
  pocet: any
  isVisible = false;
  status: any
  drivers : String[] = []
  uloziste: any
  
  constructor(private router: Router, private findDriversService: FindingDriversService, private driverinseasonsService: DriverinseasonsService,private driverStatusService: DriverStatusService,public loadingController: LoadingController) 
{
  
}


async setItem(firstName:String, lastName:String)
{

  var { value } = await Storage.get({ key: 'jezdci' });
  
  if(value == null)
  {

    await Storage.set({
      key:'jezdci',
      value: JSON.stringify([{
        jmeno: firstName,
        prijmeni: lastName
      }])
    })
  }
  else{
    var jezdci = await Storage.get({ key: 'jezdci' });
    this.drivers = JSON.parse(jezdci.value);
    var existing = this.drivers ? JSON.parse(jezdci.value) : {};
    existing['jezdec'] = {jmeno: firstName, prijmeni: lastName}
    var novyJ = JSON.stringify([{
      jmeno: firstName,
      prijmeni: lastName
    }]) 
    

  
    this.drivers.push(existing['jezdec']);
    await Storage.set({
      key:'jezdci',
      value: JSON.stringify(this.drivers)
    })
  
  }
    
    
}


  public presmeruj():void
{
  this.router.navigate(['/hledane']);
}



public btnFindClicked():void
{
  moment.locale('cs');
 if(this.name.length >=3)
 {
  this.presentLoading();
  this.findDriversService.getDriver(this.name).subscribe( (data) =>
  {
    
    this.firstName = data['MRData']['DriverTable']['Drivers'][0]['givenName'];
    this.lastName = data['MRData']['DriverTable']['Drivers'][0]['familyName'];
    this.nationality = data['MRData']['DriverTable']['Drivers'][0]['nationality'];
    this.DOB = data['MRData']['DriverTable']['Drivers'][0]['dateOfBirth'];
    this.DOB = moment(this.DOB).format('LL');

    this.driverinseasonsService.getDriverStandings(this.name).subscribe( (data:any) =>
    {
      this.sezony = data['MRData']['StandingsTable']['StandingsLists'];
      this.pocet = this.sezony.length;
    });

    this.driverStatusService.getStatus(this.name).subscribe( (data:any) =>
    {
      this.status = data['MRData']['StatusTable']['Status'];
    });

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


      this.isVisible = true;
      this.setItem(this.firstName, this.lastName);
      this.loadingDialog.dismiss();
        });
  
 }
  
}
async presentLoading()
{
this.loadingDialog = await this.loadingController.create(
{
message: 'Hledám...',
duration: 500
});
await this.loadingDialog.present();
}
  }


