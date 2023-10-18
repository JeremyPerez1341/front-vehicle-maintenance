import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVehiclesComponent } from './components/list-vehicles/list-vehicles.component';
import { ScheduleMaintenanceComponent } from './components/schedule-maintenance/schedule-maintenance.component';
import { ListMaintenanceComponent } from './components/list-maintenance/list-maintenance.component';
import { AddMaintenanceComponent } from './components/add-maintenance/add-maintenance.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-vehicles', pathMatch: 'full' },
  { path: 'list-vehicles', component: ListVehiclesComponent },
  { path: 'schedule-maintenance', component: ScheduleMaintenanceComponent },
  { path: 'list-mainentance', component: ListMaintenanceComponent},
  { path: 'add-vehicle', component: AddVehicleComponent },
  { path: 'add-maintenance', component: AddMaintenanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
