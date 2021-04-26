import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteApiComponent } from './Reportes/reporte-api.component';
import {TopBarComponent} from './Top-Bar/top-bar.component';

const routes: Routes = [
  { path: 'reporte/:id', component: ReporteApiComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ReporteApiComponent, TopBarComponent];
