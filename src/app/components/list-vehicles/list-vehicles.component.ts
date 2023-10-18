import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { VehicleServiceService } from 'src/app/services/vehicle-service.service';
import { Vehicle } from 'src/app/models/vehicle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogVehicleComponent } from '../dialog-vehicle/dialog-vehicle.component';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent {

  displayedColumns: string[] = ['id', 'brand', 'model', 'plate', 'year', 'registeredAt', 'maintenance', 'delete'];
  vehicleData!: Vehicle;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private vehicleService: VehicleServiceService, private snackBar: MatSnackBar, public dialog: MatDialog) {
    this.vehicleData = {} as Vehicle;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllVehicles();
  }

  getAllVehicles() {
    this.vehicleService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  deleteVehicle(id: number) {
    this.vehicleService.deleteVehicle(id)
    .subscribe(
      () => {
        window.location.reload();
        this.snackBar.open('Vehículo eliminado con éxito', 'Cerrar', {
          duration: 2000,
        });
      },
      (error) => {
        this.snackBar.open('Error al eliminar el vehículo', 'Cerrar', {
          duration: 2000,
        });
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openConfirmationDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogVehicleComponent);
  
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deleteVehicle(id);
      }
    });
  }
}
