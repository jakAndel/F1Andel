import { Component } from '@angular/core';
import {FindingTeamService} from '../api/finding-teams.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name:String = ''
  loadingDialog: any
  nameTeam:String = ''
  nationality:String = ''
  constructor(private findTeamService: FindingTeamService,public loadingController: LoadingController) 
{
}

public btnFindClicked():void
{

 if(this.name.length >=3)
 {
  this.presentLoading();
  
  this.findTeamService.getTeam(this.name).subscribe( (data) =>
  {
    this.nameTeam = data['MRData']['ConstructorTable']['Constructors'][0]['name'];
    this.nationality = data['MRData']['ConstructorTable']['Constructors'][0]['nationality'];
    
  });

 } 
  
}
async presentLoading()
{
this.loadingDialog = await this.loadingController.create(
{
message: 'Finding ...',
duration: 500
});
await this.loadingDialog.present();
}
  }


