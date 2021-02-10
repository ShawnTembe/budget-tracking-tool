import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-budget-item',
  templateUrl: './edit-budget-item.component.html',
  styleUrls: ['./edit-budget-item.component.scss'],
})
export class EditBudgetItemComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditBudgetItemComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) {}

  ngOnInit(): void {}

  onSubmitted(updateItem: BudgetItem) {
    this.dialogRef.close(updateItem);
  }
}
