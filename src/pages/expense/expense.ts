import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category/category';
import { TransactionProvider } from '../../providers/transaction/transaction';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html',
})
export class ExpensePage {
  categories: [any];
  expense: FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private categoryProvider: CategoryProvider,
              private transactionProvider: TransactionProvider,
              private formBuilder: FormBuilder) {
    categoryProvider.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.expense = this.formBuilder.group({
      total: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  compareObject(e1, e2): boolean{
    return e1 && e2 ? e1._id === e2._id : e1 === e2;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensePage');
  }
  save(){
    this.transactionProvider.save(this.expense.value);
  }
}
