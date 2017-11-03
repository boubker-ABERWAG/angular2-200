import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, getTestBed, inject, tick } from '@angular/core/testing';
import { PeopleService } from './people.service';
import { Http, XHRBackend, Response, ResponseOptions } from "@angular/http";
import 'rxjs/add/operator/map';
// @todo(wassim): there is a weird behavior with mock responses
// they return Promises instead of the actual "expectedResponse" object.
describe('PeopleService', () => {
  let service;
  let httpMock;
  let injector;
  let expectedResponse;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeopleService]
    });
    injector = getTestBed();
    service = injector.get(PeopleService);
    httpMock = injector.get(HttpTestingController);

    expectedResponse = [{
      "id": "123",
      "lastname": "Powers",
      "firstname": "Black",
      "twitter": "labore",
    }, {
      "id": "456",
      "lastname": "Shaffer",
      "firstname": "Vargas",
      "twitter": "irure",
    }, {
      "id": "789",
      "lastname": "Yang",
      "firstname": "Mendez",
      "twitter": "excepteur",
    }];

  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('fetch()', () => {

    it('should fetch all people when status', inject([PeopleService], (service) => {

      //TODO

      const req = httpMock.expectOne(service._backendURL.allPeople);
      expect(req.request.method).toBe('GET');
      req.flush(expectedResponse);

    }));
  });


  describe('fetchRandom()', () => {

    it('should fetch random person when status', inject([PeopleService], (service) => {

      //TODO

      const req = httpMock.expectOne(service._backendURL.randomPeople);
      expect(req.request.method).toBe('GET');
      req.flush(expectedResponse[1]);





    }));

  });


  describe('fetchOne()', () => {

    it('should fetch person with id=456', inject([PeopleService], (service) => {

      //TODO

      const req = httpMock.expectOne(service._backendURL.onePeople.replace(':id', '456'));
      expect(req.request.method).toBe('GET');
      req.flush(expectedResponse[1]);





    }));

  });

  describe('delete()', () => {

    it('should delete person with id=456', inject([PeopleService], (service) => {

      //TODO

      const req = httpMock.expectOne(service._backendURL.onePeople.replace(':id', '456'));
      expect(req.request.method).toBe('DELETE');
      expectedResponse.splice(1, 1);
      req.flush(expectedResponse);





    }));

  });

  describe('update()', () => {

    it('should update person with id=456', inject([PeopleService], (service) => {

      const body = expectedResponse[1];
      body.firstname = 'Wassim';
      body.lastname = 'Chegham';
      body.twitter = '@manekinekko';

      //TODO

      const req = httpMock.expectOne(service._backendURL.onePeople.replace(':id', '456'));
      expect(req.request.method).toBe('PUT');
      req.flush(expectedResponse[1]);

    }));

  });

  describe('create()', () => {

    it('should create person', inject([PeopleService], (service) => {

      const body = {
        id: '900',
        firstname: 'Wassim',
        lastname: 'Chegham',
        twitter: '@manekinekko',
      };

      //TODO

      const req = httpMock.expectOne(service._backendURL.allPeople);
      expect(req.request.method).toBe('POST');
      req.flush(body);

    }));

  });

});
