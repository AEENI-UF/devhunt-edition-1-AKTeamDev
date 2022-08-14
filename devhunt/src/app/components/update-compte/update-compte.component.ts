import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompteService } from '../../services/compte.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'black', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
      ])
    ])
  ]
})
export class UpdateCompteComponent implements OnInit {
  editForm: FormGroup;
  id: string;
  entete: string;
  compte: any;
  constructor(
    private fb: FormBuilder,
    private compteService: CompteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.entete = "MODIFICATION DES INFORMATIONS RATTACHES A UN COMPTES";
    this.id = this.route.snapshot.params['id'];
    this.editForm = this.fb.group({
      et_num: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      password_conf: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
    });
    this.compte = null;
  }

  ngOnInit(): void {
    this.getEtudiant();
  }

  getEtudiant() {
    this.compteService.getCompteById(this.id).subscribe((data)=>{
      if (data) {
        this.compte = data;
        this.editForm.setValue({
          et_num: this.compte.etudiant_id,
          telephone: this.compte.telephone,
          email: this.compte.mail,
          password: "",
          password_conf: ""
        })
      }
    });
  }

  onSubmitEditForm() {
    let a = document.getElementById('alert');
    let e = document.getElementById('error');
    let w = document.getElementById('warning');
    let err = document.getElementById('err');
    if (a != null) a.style.display = 'block';

    const formValue = this.editForm.value;
    const d = {
      id: this.id,
      mail: formValue.email,
      telephone: formValue.telephone,
      mot_de_passe: formValue.password,
      confirmer_mot_de_passe: formValue.password_conf
    }

    this.compteService.updateCompte(d).subscribe((data) => {
      console.log(data)
      if (data) {
        if (data.status == "error") {
          setTimeout(() => {
            if (e != null && a != null) { a.style.display = 'none'; e.click(); }
          }, 2000);
        } else if (data.status == "warning") {
          setTimeout(() => {
            if (w != null && a != null) { a.style.display = 'none'; w.click(); }
          }, 2000);
       } else if (data.status == "ok") {
          setTimeout(() => {
            if (a != null) { a.click(); a.style.display = 'none'; }
          }, 2000);
          this.router.navigate(['devhunt/akteamdev/comptes']);
        } else {
          setTimeout(() => {
            if (err != null && a != null) { err.click(); a.style.display = 'none'; }
          }, 2000);
        }
      }
    });
  }
}
