import { Component, OnInit } from '@angular/core';
import { PEOPLE } from './people';

@Component({
    selector: 'sfeir-person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {
  private person: any;

  constructor() {}

  /**
  * OnInit implementation
  */
  ngOnInit() {
    this.person = PEOPLE[0];
  }
}
