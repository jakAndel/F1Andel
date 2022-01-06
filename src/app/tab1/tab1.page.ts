import { Component } from '@angular/core';
import {FindingDriversService} from '../api/finding-drivers.service';
import { LoadingController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
import * as moment from 'moment';
import * as CountryQuery from 'country-query';

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
  
  constructor(private findDriversService: FindingDriversService,public loadingController: LoadingController) 
{
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
    this.nationality = CountryQuery.find('demonyms', this.nationality.toString());
    this.nationality = this.nationality.cca2.toLowerCase();
    this.DOB = data['MRData']['DriverTable']['Drivers'][0]['dateOfBirth'];
    this.DOB = moment(this.DOB).format('LL');
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


