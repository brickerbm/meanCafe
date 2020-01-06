import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfig } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  uri = 'http://localhost:4000';
  configFileName = '.testcaferc.json';

  constructor(private http: HttpClient) { }

  // WRITE CONFIG TO .testcaferc.json
  writeConfigFile(postData: IConfig) {
    this.http.post(`${this.uri}/config/write`, postData).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
