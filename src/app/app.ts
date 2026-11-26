import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import {PeopleList} from '../app/people-list/people-list';
import { PersonCart } from './person-cart/person-cart';


@Component({
  imports: [RouterOutlet, Header, PeopleList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('annuaire-2');
}
