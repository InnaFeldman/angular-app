import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CardComonent} from './card/card.component';
import { FormComponent } from './form/form.component';
import { DividerComponent } from './divider/divider.component';
import { SingleListComponent } from './single-list/single-list.component';
import { BinaryTreeComponent } from './binary-tree/binary-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComonent,
    FormComponent,
    DividerComponent,
    SingleListComponent,
    BinaryTreeComponent
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
