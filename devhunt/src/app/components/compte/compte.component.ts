import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { CompteService } from '../../services/compte.service';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfDeleteComponent } from '../dialogs/conf-delete/conf-delete.component';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'black', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
      ])
    ])
  ]
})
export class CompteComponent implements OnInit {
  entete: string;
  comptes: any[];
  constructor(
    private compteService: CompteService,
    private dialog: MatDialog
  ) {
    this.entete = "COMPTES";
    this.comptes = [];
  }
  ngOnInit(): void {
    this.getAllComptes();
  }

  convertDateShow(date: Date) {
    const datePipe = new DatePipe('en-US');
    const dd = datePipe.transform(date, 'dd/MM/yyyy');
    let d = "";
    if (dd != null) {
      return dd.toString();
    }
   return d;
  }

  getAllComptes() {
    this.compteService.allComptes().subscribe((data)=>{
      if (data) {
        this.comptes = data;
      }
    });
  }

  supprimer(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: id
    };
    dialogConfig.width = '400px';
    const dialogRef = this.dialog.open(ConfDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.compteService.deleteCompte(data).subscribe((d) => {
          this.getAllComptes();
        });
      }
    });
  }
}