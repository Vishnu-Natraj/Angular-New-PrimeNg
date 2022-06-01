import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prime_DropDown';
  cities: any;
  selectedCity1: any;
  selectedCity2:any;
  countries:any;
  selectedCountry:any;
  groupedCities:any;
  selectedCity3:any;
  items:any;
  item:any;


  constrtructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}