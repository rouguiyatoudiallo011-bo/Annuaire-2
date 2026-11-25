import { TestBed } from '@angular/core/testing';
import { PeopleApi } from '../services/people-api';

describe('PeopleApi', () => {
  let service: PeopleApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
