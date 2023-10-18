import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-vehicle',
  templateUrl: './dialog-vehicle.component.html',
  styleUrls: ['./dialog-vehicle.component.css']
})
export class DialogVehicleComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogVehicleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
}
