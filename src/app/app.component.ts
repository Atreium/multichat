import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ChatpageComponent } from './chatpage/chatpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomepageComponent, ChatpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multichat';
}
