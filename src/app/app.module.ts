import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component'; 
import { ChatpageComponent } from './chatpage/chatpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ChatpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Aggiungi il modulo di routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
