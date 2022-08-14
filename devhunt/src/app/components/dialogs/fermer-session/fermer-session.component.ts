import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fermer-session',
  templateUrl: './fermer-session.component.html',
  styleUrls: ['./fermer-session.component.css']
})
export class FermerSessionComponent implements OnInit {

  data: any;
  constructor(
    private dialogRef: MatDialogRef<FermerSessionComponent>, @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.data = data;
  }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close("ok");
  }

  close() {
    this.dialogRef.close();
  }

}
