import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class GoldSilverSharedService {

  silverList: AngularFireList<any>;
  goldList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getSilverDetails(){
    this.silverList = this.firebase.list('SilverDetail');
    return this.silverList.snapshotChanges();
  }

  getGoldDetails(){
    this.goldList = this.firebase.list('GoldDetail');
    return this.goldList.snapshotChanges();
  }
}
