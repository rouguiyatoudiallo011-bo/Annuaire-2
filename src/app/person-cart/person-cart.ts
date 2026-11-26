import { Component, input, inject, signal, effect } from '@angular/core';
import { Person } from '../models/models';

@Component({
  imports: [],
  selector: 'app-person-cart',
  styleUrl: './person-cart.css',
  templateUrl: './person-cart.html',
})
export class PersonCart {


  person = input.required<Person>();



}
