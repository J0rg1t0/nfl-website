import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HistoryComponent } from './history/history.component';
import { NewsComponent } from './news/news.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    MatSnackBarModule,
  ],
  exports: [RouterModule]
})
export class AppModule {}
