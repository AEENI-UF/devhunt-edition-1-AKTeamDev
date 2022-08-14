import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'black', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
      ])
    ])
  ]
})
export class AddEtudiantComponent implements OnInit {
  entete: string;
  niveau: string;
  addForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private router: Router
    ) {
    this.entete = "AJOUT D' UN ETUDIANT";
    this.niveau = this.route.snapshot.params['n'];
    this.addForm = this.fb.group({
      et_num: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
      et_nom: ['', [Validators.required, Validators.minLength(4)]],
      et_prenom: ['', [Validators.required, Validators.minLength(4)]],
      et_parcours: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]],
      et_niveau: [this.route.snapshot.params['n'], []],
    });
   }

  ngOnInit(): void {
  }

  onSubmitAddForm() {
    const formValue = this.addForm.value;
    const data = {
      et_num: formValue.et_num,
      et_nom: formValue.et_nom,
      et_prenom: formValue.et_prenom,
      et_parcours: formValue.et_parcours,
      et_niveau: formValue.et_niveau
    }
    this.etudiantService.addEtudiant(data).subscribe((data) => {
      this.router.navigate(['/devhunt/akteamdev/etudiants']);
    }); 
  }

}
