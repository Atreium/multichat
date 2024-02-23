
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ChatpageComponent } from './chatpage/chatpage.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'chatpage', component: ChatpageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full'}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
