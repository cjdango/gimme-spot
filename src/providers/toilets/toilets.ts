import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Toilet } from '../../models/toilet/toilet.model';

/*
  Generated class for the ToiletsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToiletsProvider {

  private toiletsRef: AngularFireList<Toilet> = this.db.list('toilets');

  constructor(private db: AngularFireDatabase) {
    console.log('Hello ToiletsProvider Provider');
  }

  getToilets(): AngularFireList<Toilet> {
    return this.toiletsRef;
  }

}
