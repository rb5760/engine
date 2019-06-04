import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../shared/person/person.service';
import { parse } from 'querystring';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit, OnDestroy {

  sub: Subscription;

  personedit: Person;

  constructor(private route: ActivatedRoute, private router: Router, private personService: PersonService) {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.personService.get(id).subscribe((person: Person) => {
          if (person) {
            this.personedit = person;
          } else {
            console.log(`Person with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    })
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/persons']);  //défini dans le routing module
  }

  //save(form: NgForm) {
    //this.personService.update(form).subscribe(result => {
  save() {
      this.personService.update(this.personedit).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(id) {
    this.personService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
