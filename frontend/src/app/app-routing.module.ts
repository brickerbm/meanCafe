import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ReportComponent } from './components/report/report.component';
import { ConfigComponent } from './components/config/config.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'report', component: ReportComponent },
  { path: 'config', component: ConfigComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
