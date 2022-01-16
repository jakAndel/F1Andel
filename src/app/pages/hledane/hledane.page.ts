import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-hledane',
  templateUrl: './hledane.page.html',
  styleUrls: ['./hledane.page.scss'],
})
export class HledanePage implements OnInit {

  jezdci = []
  velikost:any
  constructor(private router: Router) {
    this.getItem();
   }


  ngOnInit() {
    this.getItem();
  }

  doRefresh($event){
    window.location.reload();
  }
  

  async getItem() {

    var { value } = await Storage.get({ key: 'jezdci' });
  
  if(value == null)
  {
    this.velikost = 0;
  }
  else{
    var drivers = await Storage.get({ key: 'jezdci' });
    var temp = JSON.parse(drivers.value);
    const distinctArray = temp.filter((n, i) => temp.indexOf(n) === i);
    this.jezdci = distinctArray;
    this.velikost = this.jezdci.length;
  }

   
  
  }

  async smazani() {

    await Storage.clear();
   
  }

   
  


  

  public presmeruj():void
  {
    this.router.navigate(['/tab1']);
  }

  public smaz():void
  {
    this.smazani();
  }

}
