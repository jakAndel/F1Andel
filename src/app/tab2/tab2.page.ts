import { Component } from '@angular/core';
import { RacesInSeasonService } from '../api/races-in-season.service';
import * as  moment from 'moment-timezone';
import { getCode, getName } from 'country-list';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  getCurrentYear(): string {
    const currentYear = new Date().getFullYear();
    return currentYear.toString();
  }
  name: String = ''
  zavody = []
  vlajka: any
  vlajky: []
  hasSprint: Boolean
  closestRaceI: number
  constructor(private racesInSeasonService: RacesInSeasonService) {
    moment.locale('cs');
    this.racesInSeasonService.getAllRacesInSeason().subscribe((data) => {
      this.zavody = data['MRData']['RaceTable']['Races'];

      this.zavody.forEach(function (a) {
        var cas = a.date + " " + a.time;
        a.date = moment(a.date).format('LL');
        a.time = moment.tz(cas, "Europe/Prague").format('HH:mm');
        a.vlajka = a.Circuit.Location.country;
        if (a.vlajka === "Netherlands") {
          a.vlajka = "nl";
        } else if (a.vlajka === "UK") {
          a.vlajka = "gb";
        } else if (a.vlajka === "France") {
          a.vlajka = "fr";
        } else if (a.vlajka === "India") {
          a.vlajka = "in";
        } else if (a.vlajka === "United States" || a.vlajka === "USA") {
          a.vlajka = "us";
        } else if (a.vlajka === "Russia") {
          a.vlajka = "ru";
        } else if (a.vlajka === "UAE") {
          a.vlajka = "ae";
        } else {
          a.vlajka = getCode(a.vlajka);
        }
        a.vlajka = a.vlajka.toLowerCase();

        a.hasSprint = a.hasOwnProperty('Sprint');
      });

      const currentDate = moment();
      let closestRaceIndex = -1;
      let closestRaceDateTime: moment.Moment | null = null;

      this.zavody.forEach((a, index) => {
        const raceDateTime = moment(`${a.date} ${a.time}`, 'LL HH:mm');

        if (raceDateTime.isSameOrAfter(currentDate)) {
          if (!closestRaceDateTime || raceDateTime.isBefore(closestRaceDateTime)) {
            closestRaceIndex = index;
            closestRaceDateTime = raceDateTime;
            this.closestRaceI = index;
          }
        }
      });

      if (closestRaceIndex !== -1) {
        this.zavody.forEach((a, index) => {
          a.isClosestRace = index === closestRaceIndex;
        });
      }
    });

  }
}