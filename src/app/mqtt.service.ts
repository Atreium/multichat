import { Injectable } from '@angular/core';
import * as mqtt from 'mqtt';

const options = {
  host: 'mqtt://localhost:1883',
  port: 1883,
};

const client = mqtt.connect(options);

client.on('connect', () => {
  console.log('connessione riuscita!!');
});
client.on('error', (error) => {
  console.error('errore!! -> ', error);
});

@Injectable({
  providedIn: 'root'
})
export class MqttService {

  constructor() { }
}
