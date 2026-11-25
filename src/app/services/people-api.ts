import { Service, signal, inject } from '@angular/core';
import { Person, PeopleResponse } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Service()
export class PeopleApi {

    private readonly http = inject(HttpClient);
    private readonly url = "https://randomuser.me/api/?seed=cda2&results=30&nat=fr";
    loading = signal(true);
    people = signal<Person[]>([]);
     numberPerson = signal<number>(0);

    constructor() {
        this.getAll();
    };

    async getAll(): Promise<void> {

        try {
            const response = await firstValueFrom(this.http.get<PeopleResponse>(`${this.url}`));

            this.people.set(response.results);
            this.numberPerson.set(response.results.length);
        }
        catch (error) {
            console.error('Erreur lors du chargement :', error);
        }
        finally {
            this.loading.set(false);
        }

    }
}
