import { Component, OnInit } from '@angular/core';
import { IConfig } from 'src/app/models/config.model';

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

  configObj: IConfig;

  constructor() {
  }

  ngOnInit() {
  }

}
