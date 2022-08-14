import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators, FormsModule, Form, FormControl } from '@angular/forms';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'black', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
      ])
    ])
  ]
})
export class EditEtudiantComponent implements OnInit {
  entete: string;
  niveau: string;
  editForm: FormGroup;
  etudiant: any;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private router: Router
  ) {
    this.entete = "EDIT D' UN ETUDIANT";
    this.niveau = this.route.snapshot.params['id'];
    this.editForm = this.fb.group({
      et_num: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      et_nom: ['', [Validators.required, Validators.minLength(4)]],
      et_prenom: ['', [Validators.required, Validators.minLength(4)]],
      et_parcours: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      et_niveau: ['']
    });
    this.etudiant = this.etudiantService.getEtudiantById(this.route.snapshot.params['id']).subscribe((data) => {
      if(data) {
        this.etudiant = data;
        this.editForm.setValue({
          et_num: this.etudiant.et_num,
          et_nom: this.etudiant.et_nom,
          et_prenom: this.etudiant.et_prenom,
          et_parcours: this.etudiant.et_parcours,
          et_niveau: this.etudiant.et_niveau
        })
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmitEditForm() {
    const formValue = this.editForm.value;
    const data = {
      et_num: formValue.et_num,
      et_nom: formValue.et_nom,
      et_prenom: formValue.et_prenom,
      et_parcours: formValue.et_parcours,
      et_niveau: formValue.et_niveau
    }
    this.etudiantService.updateEtudiant(this.etudiant.id, data).subscribe((data) => {
      this.router.navigate(['/devhunt/akteamdev/etudiants']);
    });
  }
}
