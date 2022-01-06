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
      url: 'tabs/tab1',
      icon: 'person'
    },
    {
      title: 'Týmy',
      url: 'tabs/tab2',
      icon: 'people'
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
      title: 'Status jezdce',
      url: '/status',
      icon: 'medal'
    },
    {
      title: 'Oběšenec (hra)',
      url: '/obesenec',
      icon: 'game-controller'
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
