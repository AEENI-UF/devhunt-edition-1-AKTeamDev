import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  session: any;
  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
    this.session = this.userService.getUserSession();
  }

  ngOnInit(): void {
    this.initIsAuth();
  }

  initIsAuth() {
    if (this.session.email != null) {
      this.router.navigate([`/devhunt/akteamdev/configurations`]);
    }
  }

  /** authentification */
  onSubmitLogin() {
    const loginValue = this.loginForm.value;
    /*this.userService.authentification(loginValue['nom'], loginValue['password']).subscribe((data) => {*/
    let t = document.getElementById('traitement'); 
    if ((t)) {
      if (loginValue['nom'] == "kiad" && loginValue['password'] == "kiad") {//!data.compte && spinner != null) {
        t.innerHTML = '<span class="spinner-border text-success ml-4"></span>';
        setTimeout(() => {
          let u = { "email": loginValue['nom'], "password": loginValue['password'] };
          console.log(u);
          this.userService.addUserToSession(u);
          location.reload();
        }, 3000);
      } else {
        t.innerHTML = '<span class="spinner-border text-success ml-4"></span>';
        setTimeout(() => {
          if ((t)) {
            t.innerHTML = '<span class="text-danger">Acces refuse!</span>';
          }
        }, 3000);
      }
      /*});*/
    }
  }
}
