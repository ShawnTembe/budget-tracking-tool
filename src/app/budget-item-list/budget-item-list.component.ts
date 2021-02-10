import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';
import { EditBudgetItemComponent } from '../edit-budget-item/edit-budget-item.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss'],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output()
  update: EventEmitter<UpdateBudget> = new EventEmitter<UpdateBudget>();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onDeleteButtonClick(item: BudgetItem) {
    this.delete.emit(item);
  }

  onDetailClick(item: BudgetItem) {
    const dialogRef = this.dialog.open(EditBudgetItemComponent, {
      width: '500px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.update.emit({
          old: item,
          new: result,
        });
      }
    });
  }
}

export interface UpdateBudget {
  old: BudgetItem;
  new: BudgetItem;
}
