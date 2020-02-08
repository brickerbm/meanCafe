import { IConfig } from '../../models/config.model';

export interface ConfigState {
  browsers: string[];
  src: string[];
  fixtureList: string[];
  getFixturesError: Error;
  headless: boolean;
  allBrowsers: boolean;
  allFixtures: boolean;
  sendConfigError: Error;
}

export const initialConfigState: ConfigState = {
  browsers: ['chrome:headless'],
  src: ['./automated_testing/fixtures'],
  fixtureList: [],
  getFixturesError: null,
  headless: true,
  allBrowsers: true,
  allFixtures: true,
  sendConfigError: null,
};
