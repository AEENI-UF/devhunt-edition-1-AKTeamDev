import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'black', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
      ])
    ])
  ]
})
export class UpdateUserComponent implements OnInit {
  addForm: FormGroup;
  entete: string;
  user: any;
  id: string;
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.entete = "MODIFICATION D'UTILISATEUR";
    this.addForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]],
      password_conf: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]]
    });
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.usersService.getOneUser(this.id).subscribe((data)=>{
      if(data){
        this.user = data;
        this.addForm.setValue({
          username: this.user.super_user,
          password: "",
          password_conf: ""
        })
      }
    });
  }

  onSubmitAddForm() {
    let a = document.getElementById('alert');
    let e = document.getElementById('error');
    let w = document.getElementById('warning');
    let err = document.getElementById('err');
    if (a != null) a.style.display = 'block';

    const formValue = this.addForm.value;
    const d = {
      id: this.id,
      super_user: formValue.username,
      super_mdp: formValue.password,
      confirmer_super_mdp: formValue.password_conf
    }

    this.usersService.updateUser(d).subscribe((data) => {
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
            this.router.navigate(['/devhunt/akteamdev/users']);
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
