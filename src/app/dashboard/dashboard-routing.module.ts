import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboradComponent} from './dashborad/dashborad.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {path: 'dashborad', component: DashboradComponent,
      children:[
      { path: 'user', component: UserComponent }             
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
