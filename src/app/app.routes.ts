import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PeopleList } from './people-list/people-list';
import { App } from './app';
import { PersonDetail } from './person-detail/person-detail';

export const routes: Routes = [
        {
    path: '', component: PeopleList
  },

    {path: 'personnes/:uuid', component: PersonDetail},

    {path: 'annuaire', component: PeopleList }
];
