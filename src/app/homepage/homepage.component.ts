import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MqttService } from '../mqtt.service';
import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent implements OnInit {

  topics: string [] = [];

  selected_topic:string = '';
  //da spostare

  message_form = new FormGroup({
    message: new FormControl(''),
  });

  get_all_topics(): string[] {
    return this.mqtt_service.get_topics();
  }

  constructor(private router: Router, /*da spostare*/private mqtt_service: MqttService) {
    this.random_username = this.generate_random_username();
    
    //da spostare
    this.mqtt_service = mqtt_service
    
  }

  ngOnInit(): void {
    this.generate_random_username();

    // da spostare
    this.topics = this.get_all_topics();
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

  //da spostare
  subscribe_to_topic(topic: string) {
    this.mqtt_service.subscribe(topic)
    this.selected_topic = topic;
  }
  send_message_to_chat() {
    this.mqtt_service.send_message(
      this.selected_topic,
      this.message_form.value.message ?? '',
    );
  }
  
}