import { Injectable } from '@angular/core';
import { Config } from './Config';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config: Config = {};

  constructor(private http: HttpClient) { }

  loadConfig() {
    return this.http
      .get<Config>('./assets/config/configuration.json')
      .toPromise()
      .then(config => {
        this.config = config;
      });
  }

}
