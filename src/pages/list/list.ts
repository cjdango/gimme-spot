import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';

import { ToiletsProvider } from '../../providers/toilets/toilets';
import { Observable } from 'rxjs/Observable';
import { Toilet } from '../../models/toilet/toilet.model';

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
  toilets: Observable<Toilet[]>;
  private loader: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private toiletsProvider: ToiletsProvider) { }

  ionViewWillLoad() {

    this.getToilets();
  
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    this.loader.present();
  }

  getToilets() {
    this.toilets = this.toiletsProvider
      .getToilets()
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

    this.toilets.subscribe(ref => {
      this.loader.dismiss();
    });
  }

}
