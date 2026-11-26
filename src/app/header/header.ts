import { Component, inject } from '@angular/core';
import { PeopleApi } from '../services/people-api';


@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {

  service = inject(PeopleApi);
  count = this.service.numberPerson;
}
