import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';
import {ListitemPage} from '../listitem/listitem';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  pindahangka () {
    this.navCtrl.push(ListPage)
  }
  pindahuruf () {
    this.navCtrl.push(ListitemPage)
  }
}