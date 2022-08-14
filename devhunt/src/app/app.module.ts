import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FourOFourComponent } from './components/four-o-four/four-o-four.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { CompteComponent } from './components/compte/compte.component';
import { NotificationComponent } from './components/notification/notification.component';
import { UserComponent } from './components/user/user.component';
import { FermerSessionComponent } from './components/dialogs/fermer-session/fermer-session.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { EditEtudiantComponent } from './components/edit-etudiant/edit-etudiant.component';
import { ConfDeleteComponent } from './components/dialogs/conf-delete/conf-delete.component';
import { AddCompteComponent } from './components/add-compte/add-compte.component';
import { CompteSidebarComponent } from './components/compte-sidebar/compte-sidebar.component';
import { CompteNavbarComponent } from './components/compte-navbar/compte-navbar.component';
import { UpdateCompteComponent } from './components/update-compte/update-compte.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatSelectModule
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    FourOFourComponent,
    ConfigurationComponent,
    EtudiantComponent,
    CompteComponent,
    NotificationComponent,
    UserComponent,
    FermerSessionComponent,
    AddEtudiantComponent,
    EditEtudiantComponent,
    ConfDeleteComponent,
    AddCompteComponent,
    CompteSidebarComponent,
    CompteNavbarComponent,
    UpdateCompteComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
