import { Component } from '@angular/core';
import { Config } from './Config';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  config:Config = {};

  constructor(configService: ConfigService) {
    console.log('config', configService.config);
    this.config = configService.config;
  }

  title = 'ngConfigAutomation';
}
