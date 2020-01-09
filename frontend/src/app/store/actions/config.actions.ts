import { Action, createAction, props } from '@ngrx/store';

export enum EConfigActions {
  // Fixture Retrieval
  GetFixtures = '[Config] Get Fixtures',
  BeginGetFixtures = '[Config] Begin Get Fixtures',
  SuccessGetFixtures = '[Config] Success Get Fixtures',
  ErrorGettingFixtures = '[Config] Error Getting Fixtures',
  // Browsers
  UseAllBrowsers = '[Config] Use All Browsers',
  ClearAllBrowsers = '[Config] Clear All Browsers',
  AddBrowser = '[Config] Add Browser',
  RemoveBrowser = '[Config] Remove Browser',
  // Boolean Flags
  ToggleHeadless = '[Config] Toggle Headless',
  ToggleAllBrowsers = '[Config] Toggle All Browsers',
  ToggleAllFixtures = '[Config] Toggle All Fixtures',
  // Fixtures
  UseAllFixtures = '[Config] Use All Fixtures',
  ClearAllFixtures = '[Config] Clear All Fixtures',
  AddFixture = '[Config] Add Fixture',
  RemoveFixture = '[Config] Remove Fixture',
  // Send config data
  SubmitConfig = '[Config] Submit Config',
  BeginSubmitConfig = '[Config] Begin Submit Config',
  SuccessSubmitConfig = '[Config] Success Submit Config',
  ErrorSubmtConfig = '[Config] Error Submitting Config',
}

// Fixture Retrieval Actions
export const getFixtures = createAction(
  EConfigActions.GetFixtures,
);

export const beginGetFixtures = createAction(
  EConfigActions.BeginGetFixtures,
);

export const successGetFixtures = createAction(
  EConfigActions.SuccessGetFixtures,
  props<{ payload: string[] }>()
);

export const errorGettingFixtures = createAction(
  EConfigActions.ErrorGettingFixtures,
  props<Error>()
);
// Browser Actions
export const useAllBrowsers = createAction(
  EConfigActions.UseAllBrowsers,
);

export const clearAllBrowsers = createAction(
  EConfigActions.ClearAllBrowsers,
);

export const addBrowser = createAction(
  EConfigActions.AddBrowser,
  props<{ payload: string }>()
);

export const removeBrowser = createAction(
  EConfigActions.RemoveBrowser,
  props<{ payload: string }>()
);

// Boolean Flag Actions
export const toggleHeadless = createAction(
  EConfigActions.ToggleHeadless,
);

export const toggleAllBrowsers = createAction(
  EConfigActions.ToggleAllBrowsers,
);

export const toggleAllFixtures = createAction(
  EConfigActions.ToggleAllFixtures,
);

// Fixture Actions
export const useAllFixtures = createAction(
  EConfigActions.UseAllFixtures,
);

export const clearAllFixtures = createAction(
  EConfigActions.ClearAllFixtures,
);

export const addFixture = createAction(
  EConfigActions.AddFixture,
  props<{ payload: string }>()
);

export const removeFixture = createAction(
  EConfigActions.RemoveFixture,
  props<{ payload: string }>()
);

// Send Data Actions
export const submitConfig = createAction(
  EConfigActions.SubmitConfig,
  props<{ payload: { browsers: string[], src: string[], headless: boolean } }>()
);

export const beginSubmitConfig = createAction(
  EConfigActions.BeginSubmitConfig,
  props<{ payload: { browsers: string[], src: string[], headless: boolean } }>()
);

export const successSubmitConfig = createAction(
  EConfigActions.SuccessSubmitConfig,
  props<{ payload: string }>()
);

export const errorSubmitConfig = createAction(
  EConfigActions.ErrorSubmtConfig,
  props<Error>()
);
