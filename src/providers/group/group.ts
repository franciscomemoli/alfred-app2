import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the GroupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroupProvider {
  private currentGroup: any;
  constructor(public fireDatabase: AngularFireDatabase) {
    console.log('Hello GroupProvider Provider');
  }
  getCurrentGroup(){
    return this.currentGroup;
  }
  setGroup(group){
    this.currentGroup = group;
  }
  getGroup(groupId){
    return Observable.create(observer => {
      let groupRef = this.fireDatabase.object(`groups/${groupId}`);
      groupRef.valueChanges().subscribe(action => {
        this.processGroup(action)
        observer.next(action);
      },
      error => {
        observer.error(error);
      });
    })
  }
  processGroup(data){
    const accounts = [];
    for (const item of Object.keys(data.accounts)) {
     accounts.push(data.accounts[item]);
    }
    data.accounts = accounts;
  }
}

