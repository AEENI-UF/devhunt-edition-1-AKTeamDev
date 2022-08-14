import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfDeleteComponent } from '../dialogs/conf-delete/conf-delete.component';
import { UsersService } from '../../services/users.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'black', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
      ])
    ])
  ]
})
export class UserComponent implements OnInit {
  entete: string;
  users: any;
  constructor(
    private usersService: UsersService,
    private dialog: MatDialog
  ) {
    this.entete = "UTILISATEURS";
  }
  ngOnInit(): void {
    this.getAllUsers();
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

  getAllUsers() {
    this.usersService.allUsers().subscribe((data)=>{
      this.users = data;
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
        this.usersService.deleteUser(data).subscribe((d) => {
          this.getAllUsers();
        });
      }
    });
  }

}
