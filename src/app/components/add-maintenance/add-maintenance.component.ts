import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaintenanceServiceService } from 'src/app/services/maintenance-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent {
  vehicle: any;
  maintenanceData: any = {
    vehicleId: '',
    typeMaintenance: '',
    note: '',
    cost: 0,
  };

  constructor(private maintenanceService: MaintenanceServiceService, private route: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) {}


  typeMaintenanceControl = new FormControl('', [
    Validators.required
  ]);

  noteControl = new FormControl('', [
    Validators.pattern('^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ -]+$'),
    Validators.maxLength(100)
  ]);

  costControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9,.]*$'),
    Validators.maxLength(10)
  ]);

  hasErrors(): boolean {
    const controlsToCheck = [this.typeMaintenanceControl, this.noteControl, this.costControl];
  
    return controlsToCheck.some(
      control => control.invalid && control.dirty
    );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.vehicle = JSON.parse(params['vehicle']);
    });
  }

  saveMaintenance(): void {
    this.maintenanceData.vehicleId = this.vehicle.id;
    this.maintenanceService.createMaintenance(this.maintenanceData).subscribe((response) => {
      this.router.navigate(['/list-vehicles']);
      this.snackBar.open('Mantenimiento asignado con éxito', 'Cerrar', {
        duration: 2000,
      });
    })
  }


}
