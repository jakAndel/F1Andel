import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as  moment  from 'moment-timezone';

@Component({
  selector: 'app-weekend-time',
  templateUrl: './weekend-time.page.html',
  styleUrls: ['./weekend-time.page.scss'],
})
export class WeekendTimePage implements OnInit {
  firstPracticeDate: String
  secondPracticeDate: String
  thirdPracticeDate: String
  SprintDate: String 
  qualifyingDate: String
  novyCasD: String

  constructor(private modalController: ModalController) { 
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  isPastDate(date: string, timeRange: string): boolean {
    const currentDateTime = moment();
    const providedDateTime = moment(date + ' ' + (timeRange ? timeRange.split('-')[0] : ''), 'LL HH:mm');
  
    return providedDateTime.isBefore(currentDateTime);
  }

}
