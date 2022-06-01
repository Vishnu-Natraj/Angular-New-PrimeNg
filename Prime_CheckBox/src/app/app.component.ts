import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prime_CheckBox';
  checked: boolean = false;
  categories: any[] = ['Technology', 'Sports'];
  selectedCategories: any[] = [{ name: 'Accounting', key: 'A' }, { name: 'Marketing', key: 'M' }, { name: 'Production', key: 'P' }, { name: 'Research', key: 'R' }];


  ngOnInit() {
    this.selectedCategories = this.categories.slice(1, 3);
  }
}