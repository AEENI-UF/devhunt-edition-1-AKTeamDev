import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-conf-delete',
  templateUrl: './conf-delete.component.html',
  styleUrls: ['./conf-delete.component.css']
})
export class ConfDeleteComponent implements OnInit {
  id: string;
  constructor(
    private dialogRef: MatDialogRef<ConfDeleteComponent>, @Inject(MAT_DIALOG_DATA) data: any,
  ) {
    this.id = data.id;
   }

  ngOnInit(): void {
  }

  save() {
    let data = {id: this.id};
    this.dialogRef.close(this.id);
  }

  close() {
    this.dialogRef.close();
  }

}
