import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four-o-four',
  templateUrl: './four-o-four.component.html',
  styleUrls: ['./four-o-four.component.css']
})
export class FourOFourComponent implements OnInit {
  entete: string;
  constructor() {
    this.entete = "404 NOT FOUND";
  }

  ngOnInit(): void {
  }

}
