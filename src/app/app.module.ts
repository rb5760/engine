import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PersonListComponent } from './person-list/person-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonFormComponent } from './person-form/person-form.component';

import { PersonService } from './shared/person/person.service';
import { FormsModule } from '@angular/forms';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';

import { OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './auth.interceptor';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { HomeComponent } from './home/home.component';

const config = {
  issuer: 'https://dev-532637.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{0oaofmtmuNYZKIvJN356}'
};

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonFormComponent,
    PersonEditComponent,
    PersonDeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,

    FormsModule, //très important pour les formulaires

    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,

    OktaAuthModule.initAuth(config)

  
  ],
  providers: [PersonService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],   //déclaration du service //plus nécessaire sous Angular 6+ ?
  bootstrap: [AppComponent]
})
  
  export class AppModule {}

