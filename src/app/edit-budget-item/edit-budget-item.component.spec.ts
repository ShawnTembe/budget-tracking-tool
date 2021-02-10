import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditBudgetItemComponent } from './edit-budget-item.component';

describe('EditBudgetItemComponent', () => {
  let component: EditBudgetItemComponent;
  let fixture: ComponentFixture<EditBudgetItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBudgetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBudgetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
