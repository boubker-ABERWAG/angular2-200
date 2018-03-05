import { Component, OnInit } from '@angular/core';
import {PEOPLE} from './people';

@Component({
    selector: 'sfeir-person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent implements OnInit {
    private person: any;

    constructor() {
        this.person = PEOPLE[0];
    }

    /**
     * OnInit implementation
     */
    ngOnInit() {
    }

    /**
     * Returns random people
     */
    random() {
        this.person = PEOPLE[(Math.random() * PEOPLE.length) | 0 ];
    }
}
