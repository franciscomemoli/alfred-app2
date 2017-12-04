import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import { GroupProvider } from '../group/group';

/*
  Generated class for the TransactionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransactionProvider {

  constructor(private fireDatabase: AngularFireDatabase, private groupProvider: GroupProvider) {
    console.log('Hello TransactionProvider Provider');
  }
  save(transaction){
    let groupId = this.groupProvider.getCurrentGroup().id;
    let transactionsRef = this.fireDatabase.list(`groups_transactions/${groupId}`);
    transactionsRef.push(transaction);
  }
}
