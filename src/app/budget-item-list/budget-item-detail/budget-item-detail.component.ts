import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { BudgetItem } from './../../.../../../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-detail',
  templateUrl: './budget-item-detail.component.html',
  styleUrls: ['./budget-item-detail.component.scss'],
})
export class BudgetItemDetailComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() deleteButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() detailClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteButtonClick() {
    this.deleteButtonClick.emit();
  }

  onDetailClick() {
    this.detailClick.emit();
  }
}
