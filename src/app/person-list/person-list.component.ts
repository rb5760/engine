import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/person/person.service';
import { Person } from '../person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Array<Person>

  constructor(private personService : PersonService, private router: Router) { }

  ngOnInit() {
    this.personService.getAll().subscribe(data => {
      this.persons = data;
    })
  }

  remove(id) {
    this.personService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  gotoList() {
    this.router.navigate(['/persons']);  //défini dans le routing module
  }
}
