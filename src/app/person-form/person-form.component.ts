import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../shared/person/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {

  person: Person;

  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService) {
    this.person = new Person();
   }


  onSubmit() {
    this.personService.save(this.person).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/persons']);
  }

}
