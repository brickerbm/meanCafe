import { createAction, props } from '@ngrx/store';
import { Config } from '../../models';

// Fixture Retrieval Actions
export const GetFixtures = createAction(
  '[Config] Get Fixtures',
);

export const GetFixturesSuccess = createAction(
  '[Config] Get Fixtures Success',
  props<{ fixturesList: string[] }>()
);

export const GetFixturesFail = createAction(
  '[Config] Get Fixtures Fail',
  props<Error>()
);

// Browser Actions
export const UseAllBrowsers = createAction(
  '[Config] Use All Browsers',
);

export const ClearAllBrowsers = createAction(
  '[Config] Clear All Browsers',
);

export const AddBrowser = createAction(
  '[Config] Add Browser',
  props<{ browser: string }>()
);

export const RemoveBrowser = createAction(
  '[Config] Remove Browser',
  props<{ browser: string }>()
);

// Boolean Flag Actions
export const ToggleHeadless = createAction(
  '[Config] Toggle Headless',
);

export const ToggleAllBrowsers = createAction(
  '[Config] Toggle All Browsers',
);

export const ToggleAllFixtures = createAction(
  '[Config] Toggle All Fixtures',
);

// Fixture Actions
export const UseAllFixtures = createAction(
  '[Config] Use All Fixtures',
);

export const ClearAllFixtures = createAction(
  '[Config] Clear All Fixtures',
);

export const AddFixture = createAction(
  '[Config] Add Fixture',
  props<{ fixture: string }>()
);

export const RemoveFixture = createAction(
  '[Config] Remove Fixture',
  props<{ fixture: string }>()
);

// Send Data Actions
export const SendConfig = createAction(
  '[Config] Send Config',
  props<{ config: Config }>()
);

export const SendConfigSuccess = createAction(
  '[Config] Send Config Success',
  props<{ payload: string }>()
);

export const SendConfigFail = createAction(
  '[Config] Send Config Fail',
  props<Error>()
);
