import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  entete: string;
  constructor() {
    this.entete = "CONFIGURATIONS";
  }

  ngOnInit(): void {
  }

}
