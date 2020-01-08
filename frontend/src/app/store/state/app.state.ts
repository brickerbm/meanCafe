// import { RouterReducerState } from '@ngrx/router-store';
import { Report } from '../../models/ngrxReport.model';
import { IConfigState, initialConfigState } from './config.state';
import { IReportState, initialReportState } from './report.state';

export interface AppState {
  // router?: RouterReducerState;
  reports: Report[];
  reportsError: Error;
  selectedReport: Report;
  reportDeletionError: Error;
  browsers: string[];
  src: string[];
  fixtures: string[];
  fixturesError: Error;
  headless: boolean;
  allBrowsers: boolean;
  allFixtures: boolean;
  sendConfigError: Error;
}

export const initialAppState: AppState = {
  reports: [],
  reportsError: null,
  selectedReport: null,
  reportDeletionError: null,
  browsers: [],
  src: [],
  fixtures: [],
  fixturesError: null,
  headless: true,
  allBrowsers: true,
  allFixtures: true,
  sendConfigError: null,
};

export function getInitialState(): AppState {
  return initialAppState;
}
