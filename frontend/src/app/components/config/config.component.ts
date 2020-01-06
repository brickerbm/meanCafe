import { Component, OnInit } from '@angular/core';
import { IConfig } from 'src/app/models/config.model';
import { ConfigBuilderService } from 'src/app/services/config-builder.service';
import { FixtureService } from 'src/app/services/fixture.service';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';

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
    {name: 'Chromium', tag: 'chromium'},
    {name: 'Internet Explorer', tag: 'ie'},
    {name: 'Microsoft Edge', tag: 'edge'},
    {name: 'Mozilla Firefox', tag: 'firefox'},
    {name: 'Opera', tag: 'opera'},
    {name: 'Safari', tag: 'safari'},
  ];

  // fixtures = [
  //   {name: 'test1', path: './fixtures/test1.ts'},
  //   {name: 'test2', path: './fixtures/test2.ts'},
  //   {name: 'test3', path: './fixtures/test3.ts'}
  // ];

  fixList: string[];

  config: IConfig;
  myBrowsers: string[];
  mySrc: string[];

  constructor(private cbs: ConfigBuilderService, private cs: ConfigService, private fs: FixtureService, private router: Router) {
  }

  ngOnInit() {
    this.fetchFixtures();
    this.cbs.currentConfig.subscribe(currentConf => this.config = currentConf);
    this.cbs.curBrowsers.subscribe(curBrow => this.myBrowsers = curBrow);
    this.cbs.curSrc.subscribe(cSrc => this.mySrc = cSrc);
    this.resetConfig();
    // console.log('All Browsers On: ' + this.allBrowsers);
    // console.log('All Fixtures On: ' + this.allFixtures);
    // console.log('Headless: ' + this.runHeadless);
  }

  fetchFixtures() {
    this.fs
      .getFixtures()
      .subscribe((data: string[]) => {
        this.fixList = data;
        console.log('Data requested...');
        console.log(this.fixList);
      });
  }

  toggleAllBrowsers() {
    this.allBrowsers = !this.allBrowsers;
    this.cbs.toggleAllBrowsers(this.runHeadless, this.allBrowsers);
  }

  toggleAllFixtures() {
    this.allFixtures = !this.allFixtures;
    this.cbs.toggleAllFixtures(this.allFixtures);
  }

  toggleRunHeadless() {
    this.runHeadless = !this.runHeadless;
    this.cbs.toggleHeadless();
  }

  chooseBrowser(browser: string) {
    if (this.runHeadless) {
      console.log(browser + ':headless');
      this.cbs.toggleBrowser(browser + ':headless');
    } else {
      console.log(browser);
      this.cbs.toggleBrowser(browser);
    }
  }

  peelFixtureName(path: string) {
    return path.replace('.fixture.ts', '');
  }

  chooseFixture(fixture: string) {
    console.log(fixture);
    this.cbs.toggleFixture('./testing/fixtures/' + fixture);
  }

  resetConfig() {
    this.cbs.toggleAllBrowsers(this.runHeadless, this.allBrowsers);
    this.cbs.toggleAllFixtures(this.allFixtures);
  }

  runTests() {
    // this.cs.addConfig(this.config);
    this.cs.writeConfigFile(this.config);
    // console.log(this.cs.writeConfigFile(this.config));
    // child process run tests
    this.router.navigateByUrl('list');
  }
}
