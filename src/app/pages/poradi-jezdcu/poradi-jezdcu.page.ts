import { Component, OnInit } from '@angular/core';
import { PoradiService } from 'src/app/api/poradi.service';
import { LoadingController } from '@ionic/angular';
import { getCode, getNameList, getCodeList } from 'country-list';

@Component({
  selector: 'app-poradi-jezdcu',
  templateUrl: './poradi-jezdcu.page.html',
  styleUrls: ['./poradi-jezdcu.page.scss'],
})
export class PoradiJezdcuPage implements OnInit {

  sezona: String = ""
  sezony =[]
  driverS = []
  ds = []
  velikost: any
  pocetZavodu: String = ""

  constructor(private poradiJezdcu: PoradiService,public loadingController: LoadingController) { 
    this.sezony = this.range(1950, 2021);
  }

    
  
    range(start, konec) {
      var pole = [];
      for (var i = start; i <= konec; i++) {
          pole.push(i);
      }
      return pole;
  }

  Sezona($event)
  {
    var element = <HTMLInputElement> document.getElementById("tlacitko");
    element.disabled = false;
  }
 
  
  
  
    public btnFindClicked():void
  {
    document.getElementById("vysledky").style.display = "";
    document.getElementById("vysledky2").style.display = "";
    document.getElementById("sezona").style.display = "";
  
      this.poradiJezdcu.getDriversStandings(this.sezona).subscribe( (data:any) =>
      {
        this.sezona = data['MRData']['StandingsTable']['StandingsLists'][0]['season'];
        this.pocetZavodu = data['MRData']['StandingsTable']['StandingsLists'][0]['round'];
        this.ds = data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
        this.driverS = this.ds;
      });
  
  
    
    
  }
  
  ngOnInit() {
  }

}
