import { Component, OnInit } from '@angular/core';
import { QTimesService } from 'src/app/api/q-times.service';
import { LoadingController } from '@ionic/angular';
import { getCode, getName } from 'country-list';


@Component({
  selector: 'app-kvalifikace',
  templateUrl: './kvalifikace.page.html',
  styleUrls: ['./kvalifikace.page.scss'],
})


export class KvalifikacePage implements OnInit {

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

  constructor(private qTimesService: QTimesService,public loadingController: LoadingController) 
{
  this.sezony = this.range(2003, 2021);
}

jezdciSezona(event){
  
  this.qTimesService.getDrivers(this.sezona).subscribe( (data:any) =>
  {
    this.jezdci = data['MRData']['DriverTable']['Drivers'];
    
  });
  this.qTimesService.getRaces(this.sezona).subscribe( (data:any) =>
  {
    this.zavody = data['MRData']['RaceTable']['Races'];
    
  }); 
}

  ngOnInit() {
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
      
      
      this.qTimesService.getRaces(this.sezona).subscribe( (data:any) =>
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
      this.qTimesService.getRaces(this.sezona).subscribe( (data:any) =>
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
    this.qTimesService.getQ(this.sezona, this.vybranyZ).subscribe( (data:any) =>
    {
      this.z = data['MRData']['RaceTable']['Races'];
      this.zV = data['MRData']['RaceTable']['Races'][0]['QualifyingResults'];
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
    });
  }


  if(this.cbj.checked === true && this.cbz.checked == false)
  {
    this.qTimesService.getQ2(this.sezona, this.jezdec).subscribe( (data:any) =>
    {
      this.z = data['MRData']['RaceTable']['Races'];
      this.zV = data['MRData']['RaceTable']['Races'][0]['QualifyingResults'];
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
    });
  }

  
  if(this.cbj.checked === true && this.cbz.checked === true)
  {
    this.qTimesService.getQ3(this.sezona, this.vybranyZ, this.jezdec).subscribe( (data:any) =>
    {
      this.z = data['MRData']['RaceTable']['Races'];
      this.zV = data['MRData']['RaceTable']['Races'][0]['QualifyingResults'];
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
    });
  
  
  
}


}
}
