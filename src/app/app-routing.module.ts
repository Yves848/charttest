import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { WeightchartComponent } from './components/weightchart/weightchart.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "poids", component: WeightchartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
