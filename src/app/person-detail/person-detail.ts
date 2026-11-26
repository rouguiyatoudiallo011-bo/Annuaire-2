import { Component, effect, inject, input, signal } from '@angular/core';
import { PeopleApi } from '../services/people-api';
import { Person } from '../models/models';

@Component({
  imports: [],
  selector: 'app-person-detail',
  styleUrl: './person-detail.css',
  templateUrl: './person-detail.html',
})
export class PersonDetail {

  service = inject(PeopleApi);
  people = this.service.people;

  uuid = input.required<string>();

  person = signal<Person | undefined>(undefined);

  constructor() {
    effect(() => { this.loaddetailPerson(this.uuid())});
  }

  loaddetailPerson(uuid: string) {
    const result = this.people().find( (p) => p.login.uuid === uuid );
    this.person.set(result);
  }
}