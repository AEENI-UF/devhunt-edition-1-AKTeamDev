import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompteService } from '../../services/compte.service';

@Component({
  selector: 'app-add-compte',
  templateUrl: './add-compte.component.html',
  styleUrls: ['./add-compte.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'black', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
      ])
    ])
  ]
})
export class AddCompteComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private compteService: CompteService
    ) {
    this.addForm = this.fb.group({
      et_num: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      password_conf: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
    });
   }

  ngOnInit(): void {
  }

  initAddForm() {
    
  }

  onSubmitAddForm() {
    let a = document.getElementById('alert');
    let e = document.getElementById('error');
    let w = document.getElementById('warning');
    let pw = document.getElementById('p-warning');
    let err = document.getElementById('err');
    if (a != null)  a.style.display = 'block';

    const formValue = this.addForm.value;
    const d = {
      etudiant_id: formValue.et_num,
      mail: formValue.email,
      telephone: formValue.telephone,
      mot_de_passe: formValue.password,
      confirme_mot_de_passe: formValue.password_conf
    }

    this.compteService.addCompte(d).subscribe((data)=>{
      console.log(data)
      if (data) {
        if (data.status == "error"){
          setTimeout(() => {
            if (e != null && a != null) { a.style.display = 'none'; e.click();  }
          }, 2000);
        } else if (data.status =="warning") {
          setTimeout(() => {
            if (w != null && a != null) { a.style.display = 'none'; w.click(); }
          }, 2000);
        } else if (data.status =="p-warning") {
          setTimeout(() => {
            if (pw != null && a != null) { a.style.display = 'none'; pw.click(); }
          }, 2000);
        } else if (data.status == "ok"){
          setTimeout(() => {
            if (a != null) { a.click(); a.style.display = 'none'; }
          }, 2000);
        } else {
          setTimeout(() => {
            if (err != null && a != null) { err.click(); a.style.display = 'none'; }
          }, 2000);
        }
      }
    });
  }

}
