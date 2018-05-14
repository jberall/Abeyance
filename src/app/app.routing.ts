import { DashboardComponent } from './dashboard/dashboard.component';
import { PolicySaveComponent } from './policy-save/policy-save.component';
import { AbeyanceNavComponent } from './abeyance-nav/abeyance-nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AbeyanceNavComponent,
    children: [
      {
        path: '',
        redirectTo: 'policy-save',
        pathMatch: 'full'
      },
      { path: 'policy-save', component: PolicySaveComponent },
      // { path: 'dashboard', component: DashboardComponent }
      { path: '**', component: PolicySaveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
