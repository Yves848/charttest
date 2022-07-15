import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { WeightchartComponent } from './components/weightchart/weightchart.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "poids", component: WeightchartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
