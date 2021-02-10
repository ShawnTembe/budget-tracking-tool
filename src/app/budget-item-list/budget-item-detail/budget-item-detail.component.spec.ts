import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BudgetItemDetailComponent } from './budget-item-detail.component';

describe('BudgetItemDetailComponent', () => {
  let component: BudgetItemDetailComponent;
  let fixture: ComponentFixture<BudgetItemDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
