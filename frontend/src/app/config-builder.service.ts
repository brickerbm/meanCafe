import { Injectable } from '@angular/core';
import { IConfig } from './models/config.model';
import { BehaviorSubject, Subject, Observable, merge } from 'rxjs';
import { withLatestFrom, concatMap, map } from 'rxjs/operators';

const DEFAULT_CONFIG = {
  browsers: ['all:headless'],
  src: ['./testing/fixtures'],
  reporter:
      {
          name: 'JSON',
          output: './testing/report.json'
      },
  color: true,
  skipJsErrors: true
};

const browsers = ['all:headless'];
const src = ['./testing/fixtures'];

@Injectable({
  providedIn: 'root'
})
export class ConfigBuilderService {


  // tslint:disable-next-line: variable-name
  private _configSource$ = new BehaviorSubject<IConfig>(DEFAULT_CONFIG);
  currentConfig = this._configSource$.asObservable();

  private action = {
    updateBrowsers: new Subject(),
    updateFixtures: new Subject()
  };

  // tslint:disable-next-line: variable-name
  private _browsers$ = new BehaviorSubject<string[]>(browsers);
  curBrowsers = this._browsers$.asObservable();

  // tslint:disable-next-line: variable-name
  private _src$ = new BehaviorSubject<string[]>(src);
  curSrc = this._src$.asObservable();

  constructor() { }

  // private updateBrowsers: Observable<IConfig> = this.action.updateBrowsers.pipe();
  updateConfig() {
    let myConfig: IConfig = this._configSource$.getValue();
    myConfig.browsers = this._browsers$.getValue();
    myConfig.src = this._src$.getValue();
    this._configSource$.next(myConfig);
  }

  toggleHeadless() {
    let browserArr: string[] = this._browsers$.getValue();
    if (browserArr.length > 0 && browserArr[0].includes(':headless')) {
      browserArr = browserArr.map(str => str.replace(':headless', ''));
    } else if (browserArr.length > 0 && !browserArr[0].includes(':headless')) {
      browserArr = browserArr.map(str => str + ':headless');
    }
    this._browsers$.next(browserArr);
    this.updateConfig();
  }

  toggleBrowser(browser: string) {
    const browserArr: string[] = this._browsers$.getValue();
    if (browserArr.indexOf(browser) < 0) {
      browserArr.push(browser);
    } else if (browserArr.indexOf(browser) >= 0) {
      browserArr.splice(browserArr.indexOf(browser), 1);
    }
    this._browsers$.next(browserArr);
    // this._configSource$.next({browsers: browserArr, ...});
    this.updateConfig();
  }

  toggleAllBrowsers(headless: boolean, allBrowsers: boolean) {
    let browserArr: string[] = this._browsers$.getValue();
    if (allBrowsers && headless) {
      browserArr = ['all:headless'];
    } else if (allBrowsers && !headless) {
      browserArr = ['all'];
    } else if (!allBrowsers) {
      browserArr = [];
    }
    this._browsers$.next(browserArr);
    this.updateConfig();
  }

  toggleFixture(fixture: string) {
    const srcArr: string[] = this._src$.getValue();
    if (srcArr.indexOf(fixture) < 0) {
      srcArr.push(fixture);
    } else if (srcArr.indexOf(fixture) >= 0) {
      srcArr.splice(srcArr.indexOf(fixture), 1);
    }
    this._src$.next(srcArr);
    this.updateConfig();
  }

  toggleAllFixtures(allFixtures: boolean) {
    let srcArr: string[] = this._src$.getValue();
    if (allFixtures) {
      srcArr = ['./testing/fixtures'];
    } else {
      srcArr = [];
    }
    this._src$.next(srcArr);
    this.updateConfig();
  }
}
