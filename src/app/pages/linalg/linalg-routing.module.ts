import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index.component';
import {ComplexNumbersComponent} from "./complex-numbers.component";

const routes: Routes = [
  // {path: 'info', component: IndexComponent},
  {path: 'complex-numbers', component: ComplexNumbersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinalgRoutingModule {
}
