import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatCardModule, MatInput, MatInputModule, MatTableModule
} from '@angular/material';


import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from 'src/app/fake-backend/fake-backend.service';
import { TaskCompComponent } from './task-comp/task-comp.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TaskComponentService } from './task-comp/task-comp.service';


const appRoutes: Routes = [
 { path: 'home', component: WelcomeComponent },
 { path: 'task', component: TaskCompComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    TaskCompComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(FakeBackendService),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes , {useHash: true}),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [TaskComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
