import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemDetailComponent } from './budget-item-list/budget-item-detail/budget-item-detail.component';
import { EditBudgetItemComponent } from './edit-budget-item/edit-budget-item.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddItemComponent,
    BudgetItemListComponent,
    BudgetItemDetailComponent,
    EditBudgetItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [],
  entryComponents: [EditBudgetItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
