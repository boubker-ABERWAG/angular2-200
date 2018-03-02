import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'sfeir-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {
  private _person: any = {};

  constructor(private _http: HttpClient) {}

  /**
  * OnInit implementation
  */
  ngOnInit() {
  this._http.get(`${BASE_URL}/api/peoples/`)
    .subscribe(peoples => this._person = peoples[0]);
  }

  /**
  * Returns random people
  */
  random() {
  this._http.get(`${BASE_URL}/api/peoples/random`)
    .subscribe(people => this._person = people);
  }

  public get person(): any{
    return this._person;
  }

  public set person(person: any){
    this._person = person;
  }
}
