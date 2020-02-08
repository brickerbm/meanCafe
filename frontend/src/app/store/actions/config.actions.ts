import { createAction, props } from '@ngrx/store';

// Fixture Retrieval Actions
export const getFixtures = createAction(
  '[Config] Get Fixtures',
);

export const successGetFixtures = createAction(
  '[Config] Success Get Fixtures',
  props<{ fixtures: string[] }>()
);

export const errorGettingFixtures = createAction(
  '[Config] Error Getting Fixtures',
  props<Error>()
);

// Browser Actions
export const useAllBrowsers = createAction(
  '[Config] Use All Browsers',
);

export const clearAllBrowsers = createAction(
  '[Config] Clear All Browsers',
);

export const addBrowser = createAction(
  '[Config] Add Browser',
  props<{ browser: string }>()
);

export const removeBrowser = createAction(
  '[Config] Remove Browser',
  props<{ browser: string }>()
);

// Boolean Flag Actions
export const toggleHeadless = createAction(
  '[Config] Toggle Headless',
);

export const toggleAllBrowsers = createAction(
  '[Config] Toggle All Browsers',
);

export const toggleAllFixtures = createAction(
  '[Config] Toggle All Fixtures',
);

// Fixture Actions
export const useAllFixtures = createAction(
  '[Config] Use All Fixtures',
);

export const clearAllFixtures = createAction(
  '[Config] Clear All Fixtures',
);

export const addFixture = createAction(
  '[Config] Add Fixture',
  props<{ fixture: string }>()
);

export const removeFixture = createAction(
  '[Config] Remove Fixture',
  props<{ fixture: string }>()
);

// Send Data Actions
export const submitConfig = createAction(
  '[Config] Submit Config',
  props<{ config: { browsers: string[], src: string[], headless: boolean } }>()
);

export const successSubmitConfig = createAction(
  '[Config] Success Submit Config',
  props<{ payload: string }>()
);

export const errorSubmitConfig = createAction(
  '[Config] Error Submitting Config',
  props<Error>()
);
