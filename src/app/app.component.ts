import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sfeir-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class PeopleAppComponent implements OnInit{
  name: string;

  constructor() {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.name = 'Angular';
  }
}
