import { Component, OnInit } from '@angular/core';
import { Config } from '../../models';
import * as fromStore from '../../store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  browsers = [
    {name: 'Google Chrome', tag: 'chrome', checked: false},
    {name: 'Google Chrome Canary', tag: 'chrome-canary', checked: false},
    {name: 'Chromium', tag: 'chromium', checked: false},
    {name: 'Internet Explorer', tag: 'ie', checked: false},
    {name: 'Microsoft Edge', tag: 'edge', checked: false},
    {name: 'Mozilla Firefox', tag: 'firefox', checked: false},
    {name: 'Opera', tag: 'opera', checked: false},
    {name: 'Safari', tag: 'safari', checked: false},
  ];

  config$: Observable<fromStore.ConfigState> = this.store.pipe(
    select(fromStore.selectConfig)
  );

  constructor(private store: Store<fromStore.AppState>) {
    this.store.dispatch(fromStore.GetFixtures());
  }

  ngOnInit() {}

  toggleAllBrowsers(flag: boolean) {
    this.store.dispatch(fromStore.ToggleAllBrowsers());
    if (!flag) {
      this.store.dispatch(fromStore.UseAllBrowsers());
    } else {
      this.store.dispatch(fromStore.ClearAllBrowsers());
    }
  }

  toggleAllFixtures(flag: boolean) {
    this.store.dispatch(fromStore.ToggleAllFixtures());
    if (!flag) {
      this.store.dispatch(fromStore.UseAllFixtures());
    } else {
      this.store.dispatch(fromStore.ClearAllFixtures());
    }
  }

  toggleHeadless() {
    this.store.dispatch(fromStore.ToggleHeadless());
  }

  onBrowserClick(checked: boolean, browser: string) {
    if (checked) {
      this.store.dispatch(fromStore.AddBrowser({ browser }));
    } else {
      this.store.dispatch(fromStore.RemoveBrowser({ browser }));
    }
  }

  onFixtureClick(checked: boolean, fixture: string) {
    if (checked) {
      this.store.dispatch(fromStore.AddFixture({ fixture }));
    } else {
      this.store.dispatch(fromStore.RemoveFixture({ fixture }));
    }
  }

  onSubmit(browsers: string[], src: string[], headless: boolean) {
    const config: Config = { browsers, src, headless };
    console.log(config);
    // this.store.dispatch(fromStore.SendConfig({ config }));
    // TODO add spinner and route to list component after completion
  }
}
