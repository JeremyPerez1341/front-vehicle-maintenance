import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-maintenance',
  templateUrl: './dialog-maintenance.component.html',
  styleUrls: ['./dialog-maintenance.component.css']
})
export class DialogMaintenanceComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogMaintenanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }
}
