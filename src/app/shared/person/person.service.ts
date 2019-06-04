import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../../person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private usersUrl: string;

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/persons';
  }

  getAll() : Observable <Person []>{
    return this.http.get<Person[]>(this.usersUrl);
  }

  get(id: string) {
    return this.http.get<Person>(this.usersUrl + '/' + id);
  }

  save(person: Person) {
    return this.http.post<Person>(this.usersUrl, person);
  }

  update(person: Person) {
    return this.http.post<Person>(this.usersUrl + '/update/' + person.id, person);
  }

  remove(id: string){
    return this.http.delete(this.usersUrl + '/delete/' + id)
  }

}
