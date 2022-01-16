import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Network } from '@capacitor/network';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  data: any;

  appPages = [
    {
      title: 'Domů',
      url: '',
      icon: 'home'
    },
    {
      title: 'Jezdci',
      url: '/tab1',
      icon: 'person'
    },
    {
      title: 'Kalendář',
      url: '/tab2',
      icon: 'calendar'
    },
    {
      title: 'Pořadí jezdců',
      url: '/poradi-jezdcu',
      icon: 'trending-up'
    },
    {
      title: 'Pořadí týmů',
      url: '/poradi-tymu',
      icon: 'trending-up'
    },
    {
      title: 'Výsledky závodů',
      url: '/results',
      icon: 'trophy'
    },
    {
      title: 'Kvalifikace',
      url: '/kvalifikace',
      icon: 'stopwatch'
    },
    {
      title: 'Pitstopy',
      url: '/pitstopy',
      icon: 'repeat'
    },
    {
      title: 'Kontakt',
      url: '/kontakt',
      icon: 'mail'
    }
  ];



  constructor(private storage: Storage, private router: Router) {
  }

  async ngOnInit() {
  
    
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

}
