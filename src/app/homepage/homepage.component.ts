import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  //standalone: true,
  //imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent implements OnInit {

  constructor(private router: Router) {
    this.random_username = this.generate_random_username();
  }

  ngOnInit(): void {
    this.generate_random_username();
  }

  random_username: string;

  generate_random_username(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let random_username = '';

    for (let i = 0; i < 3; i++) {
      random_username += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    for (let i = 0; i < 3; i++) {
      random_username += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return random_username;
  }

  enter_chatpage() {
    this.router.navigate(['/chatpage'])
  }
}