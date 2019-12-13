import { Injectable } from '@angular/core';
import { IConfig } from './models/config.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigBuilderService {

  private configSource = new BehaviorSubject({
    browsers: [],
    src: [],
    reporter:
        {
            name: JSON,
            output: './src/assets/report.json'
        },
    color: true,
    skipJsErrors: true
  });

  currentConfig = this.configSource.asObservable();
  constructor() { }
}
