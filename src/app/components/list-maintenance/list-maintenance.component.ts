import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MaintenanceServiceService } from 'src/app/services/maintenance-service.service';
import { Maintenance } from 'src/app/models/maintenance';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogMaintenanceComponent } from '../dialog-maintenance/dialog-maintenance.component';

@Component({
  selector: 'app-list-maintenance',
  templateUrl: './list-maintenance.component.html',
  styleUrls: ['./list-maintenance.component.css']
})
export class ListMaintenanceComponent {
  displayedColumns: string[] = ['id', 'vehicleId', 'typeMaintenance', 'note', 'cost', 'maintenanceDate', 'delete'];
  maintenanceData!: Maintenance;
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  constructor(private maintenanceService: MaintenanceServiceService, private snackBar: MatSnackBar, public dialog: MatDialog) {
    this.maintenanceData = {} as Maintenance;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllVehicles();
  }

  deleteMaintenance(id: number) {
    this.maintenanceService.deleteMaintenance(id)
    .subscribe(
      () => {
        window.location.reload();
        this.snackBar.open('Mantenimiento eliminado con éxito', 'Cerrar', {
          duration: 2000,
        });
      },
      (error) => {
        this.snackBar.open('Error al intentar eliminar el mantenimiento', 'Cerrar', {
          duration: 2000,
        });
      }
    );
  }

  getAllVehicles() {
    this.maintenanceService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openConfirmationDialog(id: number): void {
    const dialogRef = this.dialog.open(DialogMaintenanceComponent);
  
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.deleteMaintenance(id);
      }
    });
  }
}
