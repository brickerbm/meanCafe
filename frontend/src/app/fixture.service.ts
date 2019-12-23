import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getFixtures() {
    return this.http.get(`${this.uri}/fixtures`);
  }
}
