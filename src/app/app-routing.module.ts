import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule) },
  { path: 'linalg', loadChildren: () => import('./pages/linalg/linalg.module').then(m => m.LinalgModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
