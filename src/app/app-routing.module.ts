import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {DividerComponent} from './divider/divider.component';
import {SingleListComponent} from './single-list/single-list.component';
import {BinaryTreeComponent} from './binary-tree/binary-tree.component';

const routes: Routes = [
  {path:'dividers', component:DividerComponent, pathMatch:'full'},
  {path:'dividers', component:DividerComponent},
  {path:'single-list', component:SingleListComponent},
  {path:'binary-tree', component:BinaryTreeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
