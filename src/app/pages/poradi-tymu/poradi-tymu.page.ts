import { Component, OnInit } from '@angular/core';
import { PoradiService } from 'src/app/api/poradi.service';
import { LoadingController } from '@ionic/angular';
import { getCode, getNameList, getCodeList } from 'country-list';
import * as CountryQuery from 'country-query';

@Component({
  selector: 'app-poradi-tymu',
  templateUrl: './poradi-tymu.page.html',
  styleUrls: ['./poradi-tymu.page.scss'],
})
export class PoradiTymuPage implements OnInit {

  sezona: String = ""
  sezony =[]
  tymyS = []
  ts = []
  velikost: any
  pocetZavodu: String = ""
  isDisabled = true;
  isVisible=false;

  constructor(private poradiTymu: PoradiService,public loadingController: LoadingController) { 
    this.sezony = this.range(1958, 2021);
    
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
    this.isDisabled = false;
  }
 
  
  
  
    public btnFindClicked():void
  {
    
  
      this.poradiTymu.getConstructorsStandings(this.sezona).subscribe( (data:any) =>
      {
        this.sezona = data['MRData']['StandingsTable']['StandingsLists'][0]['season'];
        this.pocetZavodu = data['MRData']['StandingsTable']['StandingsLists'][0]['round'];
        this.ts = data['MRData']['StandingsTable']['StandingsLists'][0]['ConstructorStandings'];
        this.tymyS = this.ts;

        this.tymyS.forEach(function(a) {
          a.vlajka = a.Constructor.nationality;
          if(a.vlajka === "Dutch")
      {
        a.vlajka = "nl";
      }
      else if(a.vlajka === "British")
      {
        a.vlajka = "gb";
      }
      else if(a.vlajka === "Rhodesian")
      {
        a.vlajka = "zw";
      }
      else if(a.vlajka === "French")
      {
        a.vlajka = "fr";
      }
      else if(a.vlajka === "Indian")
      {
        a.vlajka = "in";
      }
      else if(a.vlajka === "American")
      {
        a.vlajka = "us";
      }
      else if(a.vlajka === "Hong Kong")
      {
        a.vlajka = "hk";
      }
      else
      {
        a.vlajka = CountryQuery.find('demonyms', a.vlajka);
        console.log(a.vlajka);
        a.vlajka = a.vlajka.cca2;
      }
      a.vlajka = a.vlajka.toLowerCase();
      
        });
        this.isVisible = true;


      });
  
  
    
    
  }
  
  ngOnInit() {
  }

}
