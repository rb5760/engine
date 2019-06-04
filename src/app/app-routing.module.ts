import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { AppGuard } from './app.guard';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //home
/*   {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  }, */

  { path: 'persons', component: PersonListComponent},
  { path: 'addperson', component: PersonFormComponent },
  { path: 'personedit/:id', component: PersonEditComponent },
  { path: 'persondelete/:id', component: PersonDeleteComponent },

  //otka
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
