import { IConfig } from '../../models/config.model';

export interface IConfigState {
  config: IConfig;
  allBrowsers: boolean;
  runHeadless: boolean;
  allFixtures: boolean;
  skipErrors: boolean;
}

export const initialConfigState: IConfigState = {
  config: {
    browsers: ['all:headless'],
    src: ['./testing/fixtures'],
    reporter:
        {
            name: 'JSON',
            output: './testing/report.json'
        },
    color: true,
    skipJsErrors: true
  },
  allBrowsers: true,
  runHeadless: true,
  allFixtures: true,
  skipErrors: true
};
