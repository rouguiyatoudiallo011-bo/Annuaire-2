import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PeopleList } from './people-list/people-list';

export const routes: Routes = [
    {path: '', component: PeopleList}
];
