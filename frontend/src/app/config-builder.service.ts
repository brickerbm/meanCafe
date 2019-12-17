import { Injectable } from '@angular/core';
import { IConfig } from './models/config.model';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_CONFIG = {
  browsers: ['all:headless'],
  src: [],
  reporter:
      {
          name: 'JSON',
          output: './src/assets/report.json'
      },
  color: true,
  skipJsErrors: true
};

@Injectable({
  providedIn: 'root'
})
export class ConfigBuilderService {


  private configSource = new BehaviorSubject<IConfig>(DEFAULT_CONFIG);

  currentConfig = this.configSource.asObservable();
  constructor() { }


}
