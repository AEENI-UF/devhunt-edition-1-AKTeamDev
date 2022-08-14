import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';
import { FermerSessionComponent } from '../dialogs/fermer-session/fermer-session.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  fermerSession() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    const dialogRef = this.dialog.open(FermerSessionComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.userService.removeUserSession();
        setTimeout(() => {
          location.reload();
        }, 200);
      }
    });
  }
}
