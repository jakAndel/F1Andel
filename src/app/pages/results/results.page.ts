import { Component, OnInit } from '@angular/core';
import { VysledkyZavoduService } from 'src/app/api/vysledky-zavodu.service';
import { LoadingController } from '@ionic/angular';
import { getCode, getNameList, getCodeList } from 'country-list';


@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  zavodJmeno: String = ""
  zavodMesto: String = ""
  zavodRok: String = ""
  zavodStat: String = ""
  sezony = []
  jezdci = []
  zavody = []
  zavodyV = []
  zavodyV2 = []
  zV = []
  zV2 = []
  z = []
  velikost: any
  sezona:String = ''
  jezdec: String = ''
  vybranyZ: String = ''
  loadingDialog: any
  jezdecVybran: boolean = false;
  zavodVybran: boolean = false;
  cbj: any
  cbz: any

  constructor(private vysledkyZavoduService: VysledkyZavoduService,public loadingController: LoadingController) { 
    this.sezony = this.range(1950, 2021);
    console.log(getNameList());
    console.log(getCodeList());
  }

  jezdciSezona(event){
  
    this.vysledkyZavoduService.getDrivers(this.sezona).subscribe( (data:any) =>
    {
      this.jezdci = data['MRData']['DriverTable']['Drivers'];
      
    });
    this.vysledkyZavoduService.getRaces(this.sezona).subscribe( (data:any) =>
    {
      this.zavody = data['MRData']['RaceTable']['Races'];
      
    }); 
  }
    
  
    range(start, konec) {
      var pole = [];
      for (var i = start; i <= konec; i++) {
          pole.push(i);
      }
      return pole;
  }
  
    isChecked(e): void {
      var stav = e.currentTarget.checked;
      if (stav === true)
      {
        document.getElementById("zavod").style.display = "";
        
        
        this.vysledkyZavoduService.getRaces(this.sezona).subscribe( (data:any) =>
    {
      this.zavody = data['MRData']['RaceTable']['Races'];
      
    });
  
    
      }
      else {
        document.getElementById("zavod").style.display = "none";
      }
       
  
    }
  
  
    isChecked2(e): void {
      var stav = e.currentTarget.checked;
      if (stav === true)
      {
        if(this.jezdecVybran === true)
        {
          this.jezdecVybran = false;
        }
        else
        {
          this.jezdecVybran = true;
        }
        
        document.getElementById("vybratJ").style.display = "";
        this.vysledkyZavoduService.getRaces(this.sezona).subscribe( (data:any) =>
    {
      this.zavody = data['MRData']['RaceTable']['Races'];
    });
  
    
      }
      else {
        document.getElementById("vybratJ").style.display = "none";
      }
       
  
    }
  
    zavodC(event){ 
      var element = <HTMLInputElement> document.getElementById("tlacitko");
      element.disabled = false;
    }
  
    jezdecC(event){ 
      var element = <HTMLInputElement> document.getElementById("tlacitko");
      element.disabled = false;
    }
  
  
    public btnFindClicked():void
  {
    document.getElementById("vysledky").style.display = "";
  
    this.cbj = document.getElementById('CBJ');
  this.cbz = document.getElementById('CBZ');
  
  console.log("CBJ: ", this.cbj.checked);
  console.log("CBZ: ", this.cbz.checked);
  
    if(this.cbj.checked === false && this.cbz.checked == true)
    {
      this.vysledkyZavoduService.getR(this.sezona, this.vybranyZ).subscribe( (data:any) =>
      {
        this.z = data['MRData']['RaceTable']['Races'];
        this.zV = data['MRData']['RaceTable']['Races'][0]['Results'];
        this.zavodJmeno = data['MRData']['RaceTable']['Races'][0]['raceName'];
        this.zavodMesto = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['locality'];
        this.zavodStat = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['country'];
        if(this.zavodStat === "UAE")
        {
          this.zavodStat = "ae";
        }
        else if(this.zavodStat === "Russia")
        {
          this.zavodStat = "ru";
        }
        else if(this.zavodStat === "USA")
        {
          this.zavodStat = "us";
        }
        else if(this.zavodStat === "UK")
        {
          this.zavodStat = "gb";
        }
        else
        {
          this.zavodStat = getCode(this.zavodStat).toLowerCase();
        }
        this.zavodRok = data['MRData']['RaceTable']['Races'][0]['season'];
        this.zavodyV = this.zV;
        this.velikost = this.z.length;
        console.log(this.zavodyV);
      });
    }
  
  
    if(this.cbj.checked === true && this.cbz.checked == false)
    {
      this.vysledkyZavoduService.getR2(this.sezona, this.jezdec).subscribe( (data:any) =>
      {
        this.z = data['MRData']['RaceTable']['Races'];
        this.zV = data['MRData']['RaceTable']['Races'][0]['Results'];
        this.zavodJmeno = data['MRData']['RaceTable']['Races'][0]['raceName'];
        this.zavodMesto = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['locality'];
        this.zavodStat = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['country'];
        if(this.zavodStat === "UAE")
        {
          this.zavodStat = "ae";
        }
        else if(this.zavodStat === "Russia")
        {
          this.zavodStat = "ru";
        }
        else if(this.zavodStat === "USA")
        {
          this.zavodStat = "us";
        }
        else if(this.zavodStat === "UK")
        {
          this.zavodStat = "gb";
        }
        else
        {
          this.zavodStat = getCode(this.zavodStat).toLowerCase();
        }
        this.zavodRok = data['MRData']['RaceTable']['Races'][0]['season'];
        this.zavodyV = this.z;
        this.zavodyV2 = this.zV;
        this.velikost = this.z.length;
        console.log(this.zavodyV);
        
      });
    }
  
    
    if(this.cbj.checked === true && this.cbz.checked === true)
    {
      this.vysledkyZavoduService.getR3(this.sezona, this.vybranyZ, this.jezdec).subscribe( (data:any) =>
      {
        this.z = data['MRData']['RaceTable']['Races'];
        this.zV = data['MRData']['RaceTable']['Races'][0]['Results'];
        this.zavodJmeno = data['MRData']['RaceTable']['Races'][0]['raceName'];
        this.zavodMesto = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['locality'];
        this.zavodStat = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['country'];
        if(this.zavodStat === "UAE")
        {
          this.zavodStat = "ae";
        }
        else if(this.zavodStat === "Russia")
        {
          this.zavodStat = "ru";
        }
        else if(this.zavodStat === "USA")
        {
          this.zavodStat = "us";
        }
        else if(this.zavodStat === "UK")
        {
          this.zavodStat = "gb";
        }
        else
        {
          this.zavodStat = getCode(this.zavodStat).toLowerCase();
        }
        this.zavodRok = data['MRData']['RaceTable']['Races'][0]['season'];
        this.zavodyV = this.zV;
        this.velikost = this.z.length;
        console.log(this.zavodyV);
        
      });
    
    
    
  }
  
  
  }

  ngOnInit() {
  }

}
