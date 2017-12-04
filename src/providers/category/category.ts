import { Injectable } from '@angular/core';
import { GroupProvider } from '../group/group';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the CategoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategoryProvider {

  constructor(public groupProvider: GroupProvider, private fireDatabase: AngularFireDatabase ) {
    console.log('Hello CategoryProvider Provider');
  }
  getCategories(){
    let groupId = this.groupProvider.getCurrentGroup().id;
    return Observable.create(observer => {
      let groupRef = this.fireDatabase.list(`groups_categories/${groupId}/`);
      groupRef.valueChanges().subscribe(action => {
        observer.next(action);
      },
      error => {
        observer.error(error);
      });
    })
  }
}
