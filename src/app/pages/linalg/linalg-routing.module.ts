import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index.component';
import {Week1Component} from "./week1.component";

const routes: Routes = [
  {path: 'info', component: IndexComponent},
  {path: 'week-1', component: Week1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinalgRoutingModule {
}
