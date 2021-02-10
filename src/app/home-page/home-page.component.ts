import { Component, OnInit } from '@angular/core';
import { UpdateBudget } from '../budget-item-list/budget-item-list.component';
import { BudgetItem } from './../../../src/shared/models/budget-item.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;
  constructor() {}

  ngOnInit(): void {}

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateBudget: UpdateBudget) {
    this.budgetItems[this.budgetItems.indexOf(updateBudget.old)] =
      updateBudget.new;

    this.totalBudget -= updateBudget.old.amount;
    this.totalBudget += updateBudget.new.amount;
  }
}
