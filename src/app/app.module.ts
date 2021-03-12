import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardComonent} from './card/card.component';
import { FormComponent } from './form/form.component';
import { DividerComponent } from './divider/divider.component';
import { SingleListComponent } from './single-list/single-list.component';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';
import { SmallestNumberComponent } from './smallest-number/smallest-number.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComonent,
    FormComponent,
    DividerComponent,
    SingleListComponent,
    BinaryTreeComponent,
    SmallestNumberComponent,
    PageNotFoundComponent,
    TodoListComponent,
    TodoItemComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
