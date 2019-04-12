import { Component } from '@angular/core';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // tab1Root: string;
  // tab2Root: string;
  // tab3Root: string;

  // constructor() {
  //   this.tab1Root = 'MeasurePage';
  //   this.tab2Root = 'ActivityPage';
  //   this.tab3Root = 'HistoryPage';
  // }

  tab = 'MeasurePage';

  show(tab) {
    this.tab = tab;
  }
}
