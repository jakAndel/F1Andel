import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  appPages = [
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
      title: 'Celkové pořadí',
      url: '/poradi-jezdcu',
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
      title: 'Časy v závodě',
      url: '/laptimes',
      icon: 'alarm'
    },
    {
      title: 'Kontakt',
      url: '/kontakt',
      icon: 'mail'
    }
  ];



  constructor() {
    
  }

 
}
