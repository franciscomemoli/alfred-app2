import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupProvider } from '../../providers/group/group';
import { ExpensePage } from '../expense/expense';
import { IncomePage } from '../income/income';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  group: any;
  constructor(public navCtrl: NavController, private groupProvider: GroupProvider) {
    debugger
    this.groupProvider.getGroup('lalala').subscribe(group => {
      this.group = group;
      this.groupProvider.setGroup(group);
    })
  }
  goToIncome(){
    this.navCtrl.push(IncomePage);
  }
  goToExpense(){
    this.navCtrl.push(ExpensePage);
  }

}
