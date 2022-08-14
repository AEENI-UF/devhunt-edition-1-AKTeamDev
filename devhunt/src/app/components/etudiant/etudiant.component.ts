import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../../services/etudiant.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfDeleteComponent } from '../dialogs/conf-delete/conf-delete.component';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
  animations: [
    trigger('fade', [
      transition( 'void => *', [
        style({ backgroundColor: 'black', opacity: 0  }),
        animate(2000, style({backgroundColor: 'white', opacity: 1}) )
      ])
    ])
  ]
})
export class EtudiantComponent implements OnInit {
  entete: string;
  L1: any[];
  L2: any[];
  L3: any[];
  M1: any[];
  M2: any[];
  constructor(
    private etudiantService: EtudiantService,
    private dialog: MatDialog
  ) {
    this.entete = "ETUDIANTS";
    this.L1 = [];
    this.L2 = [];
    this.L3 = [];
    this.M1 = [];
    this.M2 = [];
  }
  ngOnInit(): void {
    this.getAllEtudiants();
  }

  getAllEtudiants() {
    this.L1 = []; this.L2 = []; this.L3 = []; this.M1 = []; this.M2 = [];
    this.etudiantService.allEtudiants().subscribe((data)=>{
        if (data) {/*
    let data = [
      { "id": 1, "et_num": "905H-F", "et_nom": "nelly", "et_prenom": "walker", "et_parcours": "IG", "et_niveau": "M1", "created_at": null, "updated_at": null }, 
      { "id": 2, "et_num": "2666", "et_nom": "iiiiii", "et_prenom": "oooo", "et_parcours": "GB", "et_niveau": "L2", "created_at": null, "updated_at": null }, 
      { "id": 3, "et_num": "801H-F", "et_nom": "victor", "et_prenom": "velo", "et_parcours": "GB", "et_niveau": "M1", "created_at": null, "updated_at": null }, 
      { "id": 4, "et_num": "870H-F", "et_nom": "nini", "et_prenom": "daid", "et_parcours": "GB", "et_niveau": "L2", "created_at": null, "updated_at": null },
      { "id": 1, "et_num": "905H-F", "et_nom": "nelly", "et_prenom": "walker", "et_parcours": "IG", "et_niveau": "M2", "created_at": null, "updated_at": null },
      { "id": 2, "et_num": "2888", "et_nom": "iiiiii", "et_prenom": "oooo", "et_parcours": "GB", "et_niveau": "L1", "created_at": null, "updated_at": null },
      { "id": 3, "et_num": "801H-F", "et_nom": "victor", "et_prenom": "velo", "et_parcours": "GB", "et_niveau": "M2", "created_at": null, "updated_at": null },
      { "id": 4, "et_num": "870H-F", "et_nom": "nini", "et_prenom": "daid", "et_parcours": "GB", "et_niveau": "L1", "created_at": null, "updated_at": null },
      { "id": 3, "et_num": "801H-F", "et_nom": "victor", "et_prenom": "velo", "et_parcours": "GB", "et_niveau": "L3", "created_at": null, "updated_at": null },
      { "id": 4, "et_num": "870H-F", "et_nom": "nini", "et_prenom": "daid", "et_parcours": "GB", "et_niveau": "L3", "created_at": null, "updated_at": null }
    ]*/
          for(let i=0; i<data.length; i++) {
            if (data[i].et_niveau == "L1") {
              this.L1.push(data[i]);
            } else if (data[i].et_niveau == "L2") {
              this.L2.push(data[i]);
            } else if (data[i].et_niveau == "L3") {
              this.L3.push(data[i]);
            } else if (data[i].et_niveau == "M1") {
              this.M1.push(data[i]);
            } else if (data[i].et_niveau == "M2") {
              this.M2.push(data[i]);
            }
          }
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
    const dialogRef = this.dialog.open(ConfDeleteComponent , dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.etudiantService.deleteEtudiant(data).subscribe((d)=>{
          this.getAllEtudiants();
        });
      }
    });
  }

}
