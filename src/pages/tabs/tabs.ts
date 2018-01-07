import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { LIST_PAGE, MAP_PAGE, PICTURE_PAGE } from '../pages.constants';


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: string = LIST_PAGE;
  tab2Root: string = MAP_PAGE;
  tab3Root: string = PICTURE_PAGE;

  constructor() {

  }
}
