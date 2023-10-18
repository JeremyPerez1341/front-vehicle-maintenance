import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {
  vehicleData: any = {
    brand: '',
    model: '',
    plate: '',
    year: 0,
  };

  constructor(private vehicleService: VehicleServiceService, private router: Router, private snackBar: MatSnackBar) {
  }

  brandControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$'),
    Validators.minLength(3),
    Validators.maxLength(20)
  ]);

  modelControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ -]+$'),
    Validators.minLength(2),
    Validators.maxLength(25)
  ]);

  plateControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Za-z0-9ÁÉÍÓÚÑ -]+$'),
    Validators.minLength(6),
  Validators.maxLength(6)
  ]);

  yearControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]+$'),
    Validators.minLength(4),
    Validators.maxLength(4)
  ]);

  hasErrors(): boolean {
    const controlsToCheck = [this.brandControl, this.modelControl, this.plateControl, this.yearControl];
  
    return controlsToCheck.some(
      control => control.invalid && control.dirty
    );
  }

  saveVehicle() {
    this.vehicleData.brand = this.vehicleData.brand.toUpperCase();
    this.vehicleData.plate = this.vehicleData.plate.toUpperCase();

    this.vehicleService.createVehicle(this.vehicleData).subscribe((response) => {
      this.router.navigate(['/list-vehicles']); 
      this.snackBar.open('Vehículo registrado con éxito', 'Cerrar', {
        duration: 2000,
      });
    });
  }

}
