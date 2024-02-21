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
      console.log('Connesso al server MQTT'); 7
    });
  }

  subscribe(topic: string) {
    this.client.subscribe(topic, (err) => {
      if (!err) {
        console.log('Tema della chat: ' + topic);
      } else {
        console.error('Errore durante la sottoscrizione al topic delle chatroom:', err);
      }
    });
  }

  send_message(topic: string, message: string): void {
    if (!this.client.connected) {
      console.error('non connesso!!');
      return;
    }

    this.client.publish(topic, message, (err) => {
      if (err) {
        console.error('errore in invio!! -> ', err);
      } else {
        console.log('messaggio spedito sulla chat -> ', topic);
        console.log('testo messaggio -> ', message);
      }
    });
  }  

  get_mqtt_client(): mqtt.MqttClient {
    return this.client;
  }

  get_topics(): string[] {
    return lista_topic;
  }
}