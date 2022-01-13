import { Component } from '@angular/core';
import {FindingDriversService} from '../api/finding-drivers.service';
import { LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import * as CountryQuery from 'country-query';
import {DriverinseasonsService} from '../api/driverinseasons.service';
import {DriverStatusService} from '../api/driver-status.service';
import { Storage } from '@capacitor/storage';


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
  
  constructor(private findDriversService: FindingDriversService, private driverinseasonsService: DriverinseasonsService,private driverStatusService: DriverStatusService,public loadingController: LoadingController) 
{
}



public btnFindClicked():void
{

  const setName = async () => {
    await Storage.set({
      key: 'name',
      value: 'Max',
    });
  };
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


