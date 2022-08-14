import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() entete = '';
  username: string | null;

  constructor(
    private usersService: UsersService
  ) { 
    this.username = null;
  }
  
  ngOnInit(): void {
    this.username = this.usersService.getUserSession().email;
  }

}
