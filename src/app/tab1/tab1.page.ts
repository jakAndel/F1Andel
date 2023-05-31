import { Component } from '@angular/core';
import { FindingDriversService } from '../api/finding-drivers.service';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import * as moment from 'moment';
import * as CountryQuery from 'country-query';
import { DriverinseasonsService } from '../api/driverinseasons.service';
import { DriverStatusService } from '../api/driver-status.service';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import podiumData from '../../assets/data/podium.json';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  name: String = ''
  loadingDialog: any
  firstName: String = ''
  lastName: String = ''
  nationality: any
  DOB: any
  sezony: any
  pocet: any
  isVisible = false;
  status: any
  drivers: String[] = []
  uloziste: any
  searchResults: string[] = [];
  event: any
  WDCcount: any
  GoldCount: any
  SilverCount: any
  BronzeCount: any

  static preklady: { [key: string]: string } = {
    "Finished": "Dokončeno",
    "Disqualified": "Diskvalifikován",
    Accident: "Nehoda",
    Collision: "Kolize",
    Engine: "Motor",
    Gearbox: "Převodovka",
    Transmission: "Přenos",
    Clutch: "Spojka",
    Hydraulics: "Hydraulika",
    Electrical: "Elektrika",
    "1 Lap": "+1 kolo",
    "2 Laps": "+2 kola",
    "3 Laps": "+3 kola",
    "4 Laps": "+4 kola",
    "5 Laps": "+5 kol",
    "6 Laps": "+6 kol",
    "7 Laps": "+7 kol",
    "8 Laps": "+8 kol",
    "9 Laps": "+9 kol",
    "Spun off": "Vytočil se",
    Radiator: "Chladič",
    Suspension: "Zavěšení",
    Brakes: "Brzdy",
    Differential: "Diferenciál",
    Overheating: "Přehřátí",
    Mechanical: "Mechanická porucha",
    Tyre: "Pneumatika",
    "Driver Seat": "Sedadlo řidiče",
    Puncture: "Defekt",
    Driveshaft: "Hřídel",
    Retired: "Odstoupil",
    "Fuel pressure": "Tlak paliva",
    "Front wing": "Přední křídlo",
    "Water pressure": "Tlak vody",
    Refuelling: "Tankování",
    Wheel: "Kolo",
    Throttle: "Plyn",
    Steering: "Řízení",
    Technical: "Technická závada",
    Electronics: "Elektronika",
    "Broken wing": "Rozbité křídlo",
    "Heat shield fire": "Požár tepelného štítu",
    Exhaust: "Výfuk",
    "Oil leak": "Únik oleje",
    "11 Laps": "+11 kol",
    "Wheel rim": "Obruč kola",
    "Water leak": "Únik vody",
    "Fuel pump": "Palivová pumpa",
    "Track rod": "Track rod",
    "17 Laps": "+17 kol",
    "Oil pressure": "Tlak oleje",
    "13 Laps": "+13 kol",
    Withdrew: "Odvolal se",
    "12 Laps": "+12 kol",
    "Engine fire": "Požár motoru",
    "26 Laps": "+26 kol",
    "Tyre puncture": "Propíchnutá pneumatika",
    "Out of fuel": "Bez paliva",
    "Wheel nut": "Matica kola",
    "Not classified": "Neklasifikováno",
    Pneumatics: "Pneumatika",
    Handling: "Manipulace",
    "Rear wing": "Zadní křídlo",
    Fire: "Požár",
    "Wheel bearing": "Ložisko kola",
    Physical: "Fyzická porucha",
    "Fuel system": "Palivový systém",
    "Oil line": "Olejová trubka",
    "Fuel rig": "Palivová sestava",
    "Launch control": "Startovací systém",
    Injured: "Zraněn",
    Fuel: "Palivo",
    "Power loss": "Ztráta výkonu",
    Vibrations: "Vibrace",
    "107% Rule": "Pravidlo 107%",
    Safety: "Bezpečnost",
    Drivetrain: "Přenosovka",
    Ignition: "Zapalování",
    "Did not qualify": "Neprošel kvalifikací",
    Injury: "Zranění",
    Chassis: "Podvozek",
    Battery: "Baterie",
    Stalled: "Zastaveno",
    Halfshaft: "Poloosa",
    Crankshaft: "Kliková hřídel",
    "10 Laps": "+10 kol",
    "Safety concerns": "Bezpečnostní obavy",
    "Not restarted": "Nenastartoval",
    Alternator: "Alternátor",
    Underweight: "Podváha",
    "Safety belt": "Pás bezpečnosti",
    "Oil pump": "Čerpadlo oleje",
    "Fuel leak": "Únik paliva",
    Excluded: "Vyloučen",
    "Did not prequalify": "Nepředkvalifikoval",
    Injection: "Vstřikování",
    Distributor: "Rozdělovač",
    "Driver unwell": "Nemocný řidič",
    Turbo: "Turbo",
    "CV joint": "Homokinetický kloub",
    "Water pump": "Čerpadlo vody",
    "Fatal accident": "Fatální nehoda",
    "Spark plugs": "Zapalovací svíčky",
    "Fuel pipe": "Palivová trubka",
    "Eye injury": "Zranění oka",
    "Oil pipe": "Olejová trubka",
    Axle: "Náprava",
    "Water pipe": "Vodovodní trubka",
    "14 Laps": "+14 kol",
    "15 Laps": "+15 kol",
    "25 Laps": "+25 kol",
    "18 Laps": "+18 kol",
    "22 Laps": "+22 kol",
    "16 Laps": "+16 kol",
    "24 Laps": "+24 kol",
    "29 Laps": "+29 kol",
    "23 Laps": "+23 kol",
    "21 Laps": "+21 kol",
    Magneto: "Magneto",
    "44 Laps": "+44 kol",
    "30 Laps": "+30 kol",
    "19 Laps": "+19 kol",
    "46 Laps": "+46 kol",
    Supercharger: "Přeplňovač",
    "20 Laps": "+20 kol",
    "42 Laps": "+42 kol",
    "Engine misfire": "Chyba zapalování",
    "Collision damage": "Poškození kolize",
    "Power Unit": "Výkonová jednotka",
    ERS: "ERS",
    "Brake duct": "Brzdový kanál",
    Seat: "Sedadlo",
    Damage: "Poškození",
    Debris: "Sutiny",
    Illness: "Nemoc",
    Undertray: "Podběh",
    "Cooling system": "Chladicí systém"
  };

  constructor(private router: Router, private findDriversService: FindingDriversService, private driverinseasonsService: DriverinseasonsService, private driverStatusService: DriverStatusService, public loadingController: LoadingController) {
  }

  searchChange(event: any) {
    const searchQuery = event.target.value;
    if (searchQuery.length >= 1) {
      this.searchDrivers(searchQuery).then(results => {
        this.searchResults = results.slice(0, 5);
      });
    } else {
      this.searchResults = [];
    }
  }

  searchDrivers(query: string): Promise<any[]> {
    return new Promise((resolve) => {
      this.findDriversService.getDrivers().subscribe((data) => {
        const drivers = data['MRData']['DriverTable']['Drivers'];

        const filteredDrivers = drivers.filter((driver) => {
          const fullName = driver['givenName'] + ' ' + driver['familyName'];
          return fullName.toLowerCase().includes(query.toLowerCase());
        });

        const formattedDrivers = filteredDrivers.map((driver) => {
          return {
            name: driver['givenName'] + ' ' + driver['familyName'],
            driverId: driver['driverId'],
          };
        });

        resolve(formattedDrivers);
      });
    });
  }



  public selectResult(result: string): void {
    this.name = result;
    moment.locale('cs');

    this.presentLoading();
    this.findDriversService.getDriver(this.name).subscribe((data) => {
      const driverId = data['MRData']['DriverTable']['Drivers'][0]['driverId'];
      this.firstName = data['MRData']['DriverTable']['Drivers'][0]['givenName'];
      this.lastName = data['MRData']['DriverTable']['Drivers'][0]['familyName'];
      this.nationality = data['MRData']['DriverTable']['Drivers'][0]['nationality'];
      this.DOB = data['MRData']['DriverTable']['Drivers'][0]['dateOfBirth'];
      this.DOB = moment(this.DOB).format('LL');
      this.findDriversService.howManyWDC(driverId).subscribe((count) => {
        this.WDCcount = count;
      });


      this.driverinseasonsService.getDriverStandings(this.name).subscribe((data: any) => {
        this.sezony = data['MRData']['StandingsTable']['StandingsLists'];
        this.pocet = this.sezony.length;
      });

      this.driverStatusService.getStatus(this.name).subscribe((data: any) => {
        this.status = data['MRData']['StatusTable']['Status'];
      });
      
        const driverData = podiumData[driverId];

        if (driverData) {
          const firstCount = driverData['1st'] || 0;
          const secondCount = driverData['2nd'] || 0;
          const thirdCount = driverData['3rd'] || 0;

          this.GoldCount = firstCount;
          this.SilverCount = secondCount;
          this.BronzeCount = thirdCount;
        }

      if (this.nationality === "Dutch") {
        this.nationality = "nl";
      } else if (this.nationality === "British") {
        this.nationality = "gb";
      } else if (this.nationality === "Rhodesian") {
        this.nationality = "zw";
      } else if (this.nationality === "French") {
        this.nationality = "fr";
      } else if (this.nationality === "Indian") {
        this.nationality = "in";
      } else if (this.nationality === "American") {
        this.nationality = "us";
      } else {
        this.nationality = CountryQuery.find('demonyms', this.nationality);
        this.nationality = this.nationality.cca2;
      }
      this.nationality = this.nationality.toLowerCase();

      this.isVisible = true;
      this.setItem(this.firstName, this.lastName);
      this.loadingDialog.dismiss();
    });
  }




  async setItem(firstName: String, lastName: String) {

    var { value } = await Storage.get({ key: 'jezdci' });

    if (value == null) {

      await Storage.set({
        key: 'jezdci',
        value: JSON.stringify([{
          jmeno: firstName,
          prijmeni: lastName
        }])
      })
    }
    else {
      var jezdci = await Storage.get({ key: 'jezdci' });
      this.drivers = JSON.parse(jezdci.value);
      var existing = this.drivers ? JSON.parse(jezdci.value) : {};
      existing['jezdec'] = { jmeno: firstName, prijmeni: lastName }
      var novyJ = JSON.stringify([{
        jmeno: firstName,
        prijmeni: lastName
      }])



      this.drivers.push(existing['jezdec']);
      await Storage.set({
        key: 'jezdci',
        value: JSON.stringify(this.drivers)
      })

    }


  }


  public presmeruj(): void {
    this.router.navigate(['/hledane']);
  }



  public btnFindClicked(): void {
    moment.locale('cs');
    if (this.name.length >= 3) {
      this.presentLoading();
      this.findDriversService.getDriver(this.name).subscribe((data) => {

        this.firstName = data['MRData']['DriverTable']['Drivers'][0]['givenName'];
        this.lastName = data['MRData']['DriverTable']['Drivers'][0]['familyName'];
        this.nationality = data['MRData']['DriverTable']['Drivers'][0]['nationality'];
        this.DOB = data['MRData']['DriverTable']['Drivers'][0]['dateOfBirth'];
        this.DOB = moment(this.DOB).format('LL');

        this.driverinseasonsService.getDriverStandings(this.name).subscribe((data: any) => {
          this.sezony = data['MRData']['StandingsTable']['StandingsLists'];
          this.pocet = this.sezony.length;
        });

        this.driverStatusService.getStatus(this.name).subscribe((data: any) => {
          this.status = data['MRData']['StatusTable']['Status'];
        });

        const driverId = data['MRData']['DriverTable']['Drivers'][0]['driverId'];
        const driverData = podiumData[driverId];

        if (driverData) {
          const firstCount = driverData['1st'] || 0;
          const secondCount = driverData['2nd'] || 0;
          const thirdCount = driverData['3rd'] || 0;

          this.GoldCount = firstCount;
          this.SilverCount = secondCount;
          this.BronzeCount = thirdCount;
        }

        if (this.nationality === "Dutch") {
          this.nationality = "nl";
        }
        else if (this.nationality === "British") {
          this.nationality = "gb";
        }
        else if (this.nationality === "Rhodesian") {
          this.nationality = "zw";
        }
        else if (this.nationality === "French") {
          this.nationality = "fr";
        }
        else if (this.nationality === "Indian") {
          this.nationality = "in";
        }
        else if (this.nationality === "American") {
          this.nationality = "us";
        }
        else {
          this.nationality = CountryQuery.find('demonyms', this.nationality);
          this.nationality = this.nationality.cca2;
        }
        this.nationality = this.nationality.toLowerCase();


        this.isVisible = true;
        this.setItem(this.firstName, this.lastName);
        this.loadingDialog.dismiss();
      });

    }

  }
  async presentLoading() {
    this.loadingDialog = await this.loadingController.create(
      {
        message: 'Hledám...',
        duration: 500
      });
    await this.loadingDialog.present();
  }
}


