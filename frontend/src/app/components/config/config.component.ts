import { Component, OnInit } from '@angular/core';
import { IConfig } from 'src/app/models/config.model';
import { ConfigBuilderService } from 'src/app/config-builder.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  allBrowsers = true;
  runHeadless = true;
  runDocker = false;
  allFixtures = true;
  skipErrors = true;

  browsers = [
    {name: 'Google Chrome', tag: 'chrome'},
    {name: 'Google Chrome Canary', tag: 'chrome-canary'},
    {name: 'Chromeium', tag: 'chromium'},
    {name: 'Internet Explorer', tag: 'ie'},
    {name: 'Microsoft Edge', tag: 'edge'},
    {name: 'Mozilla Firefox', tag: 'firefox'},
    {name: 'Opera', tag: 'opera'},
    {name: 'Safari', tag: 'safari'},
  ];

  fixtures = [
    {name: 'test1', path: './fixtures/test1.ts'},
    {name: 'test2', path: './fixtures/test2.ts'},
    {name: 'test3', path: './fixtures/test3.ts'}
  ];

  config: IConfig;

  constructor(private cbs: ConfigBuilderService) {
  }

  ngOnInit() {
    this.cbs.currentConfig.subscribe(currentConf => this.config = currentConf);
  }

  toggleAllBrowsers() {
    this.allBrowsers = !this.allBrowsers;
  }

  toggleAllFixtures() {
    this.allFixtures = !this.allFixtures;
  }

  toggleRunHeadless() {
    this.runHeadless = !this.runHeadless;
  }
}
