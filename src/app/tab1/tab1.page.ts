import { Component } from '@angular/core';
import {FindingDriversService} from '../api/finding-drivers.service';
import { LoadingController } from '@ionic/angular';

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
  nationality:String = ''
  DOB:String = ''
  constructor(private findDriversService: FindingDriversService,public loadingController: LoadingController) 
{
}

public btnFindClicked():void
{

 if(this.name.length >=3)
 {
  this.presentLoading();
  this.findDriversService.getDriver(this.name).subscribe( (data) =>
  {
    
    this.firstName = data['MRData']['DriverTable']['Drivers'][0]['givenName'];
    this.lastName = data['MRData']['DriverTable']['Drivers'][0]['familyName'];
    this.nationality = data['MRData']['DriverTable']['Drivers'][0]['nationality'];
    this.DOB = data['MRData']['DriverTable']['Drivers'][0]['dateOfBirth'];
    
  });
  this.loadingDialog.dismiss();
 } 
  
}
async presentLoading()
{
this.loadingDialog = await this.loadingController.create(
{
message: 'Finding ...',
});
await this.loadingDialog.present();
}
  }


