import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // CREATE
  addConfig(browsers: string[], src: string[], reporterName: string, reporterOutput: string, color: boolean, skipJsErrors: boolean) {
    const config = {
      browsers,
      src,
      reporter: {name: reporterName, output: reporterOutput},
      color,
      skipJsErrors
    };
    return this.http.post('${this.uri}/configs/add', config);
  }
  // READ
  getConfigs() {
    return this.http.get('${this.uri}/configs');
  }

  getConfigById(id) {
    return this.http.get('${this.uri}/configs/${id}');
  }

  // UPDATE
  updateConfig(id, browsers: string[], src: string[], reporterName: string, reporterOutput: string, color: boolean, skipJsErrors: boolean) {
    const config = {
      browsers,
      src,
      reporter: {name: reporterName, output: reporterOutput},
      color,
      skipJsErrors
    };
    return this.http.post('${this.uri}/configs/update/${id}', config);
  }

  // DELETE
  deleteConfig(id) {
    return this.http.get('${this.uri}/configs/delete/${id}');
  }
}
