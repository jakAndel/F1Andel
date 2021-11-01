import { Component } from '@angular/core';
import {FindingTeamService} from '../api/finding-teams.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab1Page {
  name:String = ''
  loadingDialog: any
  nameTeam:String = ''
  nationality:String = ''
  constructor(private findDriversService: FindingTeamService,public loadingController: LoadingController) 
{
}

public btnFindClicked():void
{

 if(this.name.length >=3)
 {
  this.presentLoading();
  this.findDriversService.getTeam(this.name).subscribe( (data) =>
  {
    
    this.nameTeam = data['MRData']['ConstructorTable']['Constructor'][0]['name'];
    this.nationality = data['MRData']['ConstructorTable']['Constructor'][0]['nationality'];
    
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


