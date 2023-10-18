import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListVehiclesComponent } from './components/list-vehicles/list-vehicles.component';
import { ScheduleMaintenanceComponent } from './components/schedule-maintenance/schedule-maintenance.component';
import { ListMaintenanceComponent } from './components/list-maintenance/list-maintenance.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { AddMaintenanceComponent } from './components/add-maintenance/add-maintenance.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogVehicleComponent } from './components/dialog-vehicle/dialog-vehicle.component';
import { DialogMaintenanceComponent } from './components/dialog-maintenance/dialog-maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVehiclesComponent,
    ScheduleMaintenanceComponent,
    ListMaintenanceComponent,
    AddVehicleComponent,
    AddMaintenanceComponent,
    DialogVehicleComponent,
    DialogMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatPaginatorModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
