import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'sfeir-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {

  private _people;

  constructor(private _http: HttpClient) {}

  /**
  * OnInit implementation
  */
  ngOnInit() {
    this._http.get(`${BASE_URL}/api/peoples/`)
      .subscribe( (people) => this._people = people);
  }

  /**
   *
   * @returns {any}
   */
  public get people(){
    return this._people;
  }

  public set people(people: any){
    this._people = people;
  }
}
