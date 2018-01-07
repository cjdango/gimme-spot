import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  toilets: Object[]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.toilets = [
      { name: 'Toilet A', owner: 'Chersie', description: 'Lorem ipsum dolor set amet!' },
      { name: 'Toilet B', owner: 'Chersie', description: 'Lorem ipsum dolor set amet!' },
      { name: 'Toilet C', owner: 'Chersie', description: 'Lorem ipsum dolor set amet!' },
      { name: 'Toilet D', owner: 'Chersie', description: 'Lorem ipsum dolor set amet!' },
      { name: 'Toilet E', owner: 'Chersie', description: 'Lorem ipsum dolor set amet!' },
      { name: 'Toilet F', owner: 'Chersie', description: 'Lorem ipsum dolor set amet!' },
      { name: 'Toilet G', owner: 'Chersie', description: 'Lorem ipsum dolor set amet!' }
    ]
  }

}
