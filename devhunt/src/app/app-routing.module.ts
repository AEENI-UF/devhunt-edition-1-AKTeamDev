import { Inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from  './components/login/login.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { CompteComponent } from './components/compte/compte.component';
import { NotificationComponent } from './components/notification/notification.component';
import { UserComponent } from './components/user/user.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';

import { AuthGuard } from './services/auth-guard.service';
import { EditEtudiantComponent } from './components/edit-etudiant/edit-etudiant.component';
import { AddCompteComponent } from './components/add-compte/add-compte.component';
import { UpdateCompteComponent } from './components/update-compte/update-compte.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  { path: 'devhunt/akteamdev', component: WelcomeComponent },
  { path: 'devhunt/akteamdev/account-add', component: AddCompteComponent },
  { path: 'devhunt/akteamdev/login', component: LoginComponent },
  { path: 'devhunt/akteamdev/home', canActivate:[AuthGuard], component: HomeComponent },
  { path: 'devhunt/akteamdev/configurations', canActivate: [AuthGuard], component: ConfigurationComponent },
  { path: 'devhunt/akteamdev/etudiants', canActivate: [AuthGuard], component: EtudiantComponent },
  { path: 'devhunt/akteamdev/etudiants/:n/add', canActivate: [AuthGuard], component: AddEtudiantComponent },
  { path: 'devhunt/akteamdev/etudiants/:id/update', canActivate: [AuthGuard], component: EditEtudiantComponent },
  { path: 'devhunt/akteamdev/comptes', canActivate: [AuthGuard],  component: CompteComponent },
  { path: 'devhunt/akteamdev/comptes/:id/update', canActivate: [AuthGuard], component: UpdateCompteComponent },
  { path: 'devhunt/akteamdev/notifications', canActivate: [AuthGuard], component: NotificationComponent },
  { path: 'devhunt/akteamdev/users', canActivate: [AuthGuard], component: UserComponent },
  { path: 'devhunt/akteamdev/users/add', canActivate: [AuthGuard], component: AddUserComponent },
  { path: 'devhunt/akteamdev/users/:id/update', canActivate: [AuthGuard], component: UpdateUserComponent },
  { path: '', redirectTo: 'devhunt/akteamdev', pathMatch: 'full' },
  { path: '**', canActivate: [AuthGuard], component: FourOFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
