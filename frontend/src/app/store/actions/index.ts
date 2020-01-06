// Action Index
import { Action } from '@ngrx/store';

export enum Actions {
  ReadAllReports = 'Read All Accounts',
  ReadReportByID = 'Read Report By ID',
  DeleteReportByID = 'Delete Report By ID',
  CountFailedInReport = 'Count Failed In Report',
  CountFailedInFixture = 'Count Failed In Fixture',
  CountPassedInFixture = 'Count Passed In Fixture',
  CountSkippedInFixture = 'Count Skipped In Fixture',
  UpdateCurrentReportID = 'Update Current Report ID',
  ReadAllFixtureFilenames = 'Read All Fixture Filenames',
  WriteConfigFileToServer = 'Write Config File To Server',
  ToggleHeadlessMode = 'Toggle Headless Mode',
  ToggleAllBrowsers = 'Toggle All Browsers',
  AddBrowserToConfig = 'Add Browser To Config',
  RemoveBrowserFromConfig = 'Remove Browser From Config',
  ToggleAllFixtures = 'Toggle All Fixtures',
  AddFixtureToConfig = 'Add Fixture To Config',
  RemoveFixtureFromConfig = 'Remove Fixture From Config'
}
