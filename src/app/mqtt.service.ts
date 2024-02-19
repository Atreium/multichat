import { Injectable } from '@angular/core';
import mqtt from 'mqtt';

const lista_topic: string[] = [
  "film",
  "musica",
  "videogiochi"
]

@Injectable({
  providedIn: 'root'
})
export class MqttService {
  private client: mqtt.MqttClient;

  constructor() {
    this.client = mqtt.connect('ws://localhost:9001');
    this.client.on('connect', () => {
      console.log('Connesso al server MQTT');
    });
  }

  subscribe(topic: string){
    this.client.subscribe(topic, (err) => {
    if (!err) {
    console.log('Sottoscritto al topic delle chatroom');
    } else {
    console.error('Errore durante la sottoscrizione al topic delle chatroom:', err);
    }
    }); 
  }
  
  getMqttClient(): mqtt.MqttClient {
    return this.client;
  }

  get_topics(): string[] {
    return lista_topic;
  }
}