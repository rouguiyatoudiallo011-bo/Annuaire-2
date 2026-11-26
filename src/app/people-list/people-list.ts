import { Component, inject } from '@angular/core';
import { PeopleApi } from '../services/people-api';
import { PersonCart } from '../person-cart/person-cart';

@Component({
  imports: [PersonCart],
  selector: 'app-people-list',
  styleUrl: './people-list.css',
  templateUrl: './people-list.html',
})
export class PeopleList {

 service = inject(PeopleApi);

 people = this.service.people;
  

}
