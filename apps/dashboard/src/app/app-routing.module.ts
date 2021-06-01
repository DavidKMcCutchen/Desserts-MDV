import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { TreatComponent } from './treat/treat.component';
import { TreatService } from "@dessert/core-data";
import { LoginComponent } from "@dessert/ui-login";

const routes: Route[] = [
  {path:'', component: LoginComponent},
  {path: 'treats', component: TreatComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 })
 export class RoutingModule {}
