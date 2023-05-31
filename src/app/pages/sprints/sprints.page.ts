import { Component, OnInit } from '@angular/core';
import { SprintsService } from 'src/app/api/sprints.service';
import { LoadingController } from '@ionic/angular';
import * as CountryQuery from 'country-query';
import { getCode, getName } from 'country-list';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.page.html',
  styleUrls: ['./sprints.page.scss'],
})
export class SprintsPage implements OnInit {
  sezony = []
  zavodJmeno: String = ""
  zavodMesto: String = ""
  zavodRok: String = ""
  zavodStat: String = ""
  jezdci = []
  zavody = []
  zavodyV = []
  zavodyV2 = []
  zV = []
  zV2 = []
  z = []
  velikost: any
  sezona: String = ''
  jezdec: String = ''
  vybranyZ: String = ''
  loadingDialog: any

  cbj: any
  cbz: any
  isDisabled = true;
  isVisible = false;
  isVisible2 = false;
  isVisible3 = false;

  constructor(private alertController: AlertController, private sprintService: SprintsService, public loadingController: LoadingController) 
  {
    const currentYear = new Date().getFullYear();
    this.sezony = this.range(2021, currentYear);
  }
  ngOnInit(): void {
  }

  jezdciSezona(event) {

    var cbj = <HTMLInputElement>document.getElementById("CBJ");
    cbj.checked = false;

    var cbz = <HTMLInputElement>document.getElementById("CBZ");
    cbz.checked = false;

    this.jezdec = null;
    this.vybranyZ = null;

    this.isDisabled = true;
    this.isVisible = false;
    this.isVisible2 = false;
    this.isVisible3 = false;

    this.sprintService.getDrivers(this.sezona).subscribe((data: any) => {
      this.jezdci = data['MRData']['DriverTable']['Drivers'];

    });
    this.sprintService.getRaces(this.sezona).subscribe((data: any) => {
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
    if (stav === true) {
      this.isVisible = true;


      this.sprintService.getRaces(this.sezona).subscribe((data: any) => {
        this.zavody = data['MRData']['RaceTable']['Races'];
        const currentDate = new Date();
        const pastZavody = this.zavody.filter(zavod => {
          const raceDate = new Date(zavod.date);
          return raceDate <= currentDate && zavod.hasOwnProperty("Sprint");
        });
        this.zavody = pastZavody;

      });


    }
    else {
      this.isVisible = false;
    }


  }


  isChecked2(e): void {
    var stav = e.currentTarget.checked;
    if (stav === true) {
      this.isVisible2 = true;
      this.sprintService.getRaces(this.sezona).subscribe((data: any) => {
        this.zavody = data['MRData']['RaceTable']['Races'];
        const currentDate = new Date();
        const pastZavody = this.zavody.filter(zavod => {
          const raceDate = new Date(zavod.date);
          return raceDate <= currentDate && zavod.hasOwnProperty("Sprint");
        });
        this.zavody = pastZavody;

      });


    }
    else {
      this.isVisible2 = false;
    }


  }

  zavodC(event) {
    this.isDisabled = false;
  }

  jezdecC(event) {
    this.isDisabled = false;
  }


  public btnFindClicked(): void {
    this.isVisible3 = true;

    this.cbj = document.getElementById('CBJ');
    this.cbz = document.getElementById('CBZ');
    if (this.cbj.checked === false && this.cbz.checked == true) {
      this.sprintService.getSprints1(this.sezona, this.vybranyZ).subscribe((data: any) => {
        this.z = data['MRData']['RaceTable']['Races'];
        this.zV = data['MRData']['RaceTable']['Races'][0]['SprintResults'];
        this.zavodJmeno = data['MRData']['RaceTable']['Races'][0]['raceName'];
        this.zavodMesto = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['locality'];
        this.zavodStat = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['country'];
        if (this.zavodStat === "UAE") {
          this.zavodStat = "ae";
        }
        else if (this.zavodStat === "Russia") {
          this.zavodStat = "ru";
        }
        else if (this.zavodStat === "USA") {
          this.zavodStat = "us";
        }
        else if (this.zavodStat === "UK") {
          this.zavodStat = "gb";
        }
        else {
          this.zavodStat = getCode(this.zavodStat).toLowerCase();
        }
        this.zavodRok = data['MRData']['RaceTable']['Races'][0]['season'];
        this.zavodyV = this.zV;
        this.velikost = this.z.length;

        this.zavodyV.forEach(function (a) {
          a.vlajka = a.Driver.nationality;
          if (a.vlajka === "Dutch") {
            a.vlajka = "nl";
          }
          else if (a.vlajka === "British") {
            a.vlajka = "gb";
          }
          else if (a.vlajka === "French") {
            a.vlajka = "fr";
          }
          else if (a.vlajka === "Rhodesian") {
            a.vlajka = "zw";
          }
          else if (a.vlajka === "Indian") {
            a.vlajka = "in";
          }
          else if (a.vlajka === "American") {
            a.vlajka = "us";
          }
          else {
            a.vlajka = CountryQuery.find('demonyms', a.vlajka);
            a.vlajka = a.vlajka.cca2;
          }
          a.vlajka = a.vlajka.toLowerCase();
        });


      });
    }


    if (this.cbj.checked === true && this.cbz.checked == false) {
      this.sprintService.getSprints2(this.sezona, this.jezdec).subscribe((data: any) => {
        this.z = data['MRData']['RaceTable']['Races'];
        this.zavodJmeno = data['MRData']['RaceTable']['Races'][0]['raceName'];
        this.zavodMesto = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['locality'];
        this.zavodStat = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['country'];

        if (this.zavodStat === "UAE") {
          this.zavodStat = "ae";
        }
        else if (this.zavodStat === "Russia") {
          this.zavodStat = "ru";
        }
        else if (this.zavodStat === "USA") {
          this.zavodStat = "us";
        }
        else if (this.zavodStat === "UK") {
          this.zavodStat = "gb";
        }
        else {
          this.zavodStat = getCode(this.zavodStat).toLowerCase();
        }
        this.zavodRok = data['MRData']['RaceTable']['Races'][0]['season'];
        this.zavodyV = this.z;
        this.velikost = this.z.length;
        this.zavodyV.forEach(function (a) {
          a.vlajka = a.Circuit.Location.country;
          if (a.vlajka === "Netherlands") {
            a.vlajka = "nl";
          }
          else if (a.vlajka === "UK") {
            a.vlajka = "gb";
          }
          else if (a.vlajka === "France") {
            a.vlajka = "fr";
          }
          else if (a.vlajka === "India") {
            a.vlajka = "in";
          }
          else if (a.vlajka === "United States" || a.vlajka === "USA") {
            a.vlajka = "us";
          }
          else if (a.vlajka === "Russia") {
            a.vlajka = "ru";
          }
          else if (a.vlajka === "Korea") {
            a.vlajka = "kr";
          }
          else if (a.vlajka === "UAE") {
            a.vlajka = "ae";
          }
          else {
            a.vlajka = getCode(a.vlajka);
          }
          a.vlajka = a.vlajka.toLowerCase();
        });

        this.zavodyV.forEach(function (a) {
          a.vlajka2 = a.SprintResults[0].Driver.nationality;
          if (a.vlajka2 === "Dutch") {
            a.vlajka2 = "nl";
          }
          else if (a.vlajka2 === "British") {
            a.vlajka2 = "gb";
          }
          else if (a.vlajka2 === "French") {
            a.vlajka2 = "fr";
          }
          else if (a.vlajka2 === "Rhodesian") {
            a.vlajka2 = "zw";
          }
          else if (a.vlajka2 === "Indian") {
            a.vlajka2 = "in";
          }
          else if (a.vlajka2 === "American") {
            a.vlajka2 = "us";
          }
          else {
            a.vlajka2 = CountryQuery.find('demonyms', a.vlajka2);
            a.vlajka2 = a.vlajka2.cca2;
          }
          a.vlajka2 = a.vlajka2.toLowerCase();
        });
      });
    }


    if (this.cbj.checked === true && this.cbz.checked === true) {
      this.sprintService.getSprints3(this.sezona, this.vybranyZ, this.jezdec).subscribe((data: any) => {
        this.z = data['MRData']['RaceTable']['Races'];
        this.zV = data['MRData']['RaceTable']['Races'][0]['SprintResults'];
        this.zavodJmeno = data['MRData']['RaceTable']['Races'][0]['raceName'];
        this.zavodMesto = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['locality'];
        this.zavodStat = data['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['country'];
        if (this.zavodStat === "UAE") {
          this.zavodStat = "ae";
        }
        else if (this.zavodStat === "Russia") {
          this.zavodStat = "ru";
        }
        else if (this.zavodStat === "USA") {
          this.zavodStat = "us";
        }
        else if (this.zavodStat === "UK") {
          this.zavodStat = "gb";
        }
        else {
          this.zavodStat = getCode(this.zavodStat).toLowerCase();
        }
        this.zavodRok = data['MRData']['RaceTable']['Races'][0]['season'];
        this.zavodyV = this.zV;
        this.velikost = this.z.length;

        this.zavodyV.forEach(function (a) {
          a.vlajka = a.Driver.nationality;
          if (a.vlajka === "Dutch") {
            a.vlajka = "nl";
          }
          else if (a.vlajka === "British") {
            a.vlajka = "gb";
          }
          else if (a.vlajka === "French") {
            a.vlajka = "fr";
          }
          else if (a.vlajka === "Rhodesian") {
            a.vlajka = "zw";
          }
          else if (a.vlajka === "Indian") {
            a.vlajka = "in";
          }
          else if (a.vlajka === "American") {
            a.vlajka = "us";
          }
          else {
            a.vlajka = CountryQuery.find('demonyms', a.vlajka);
            a.vlajka = a.vlajka.cca2;
          }
          a.vlajka = a.vlajka.toLowerCase();
        });
      });
    }
  }
}
