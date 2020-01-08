import { Action, createReducer, on } from '@ngrx/store';
import * as ConfigActions from '../actions/config.actions';
import { initialAppState, AppState } from '../state/app.state';

export const configReducer = createReducer(
  initialAppState,
  // Fixture Retrieval
  on(ConfigActions.getFixtures, state => state),
  on(ConfigActions.successGetFixtures, (state, { payload }) => {
    return { ...state, fixtures: payload, fixturesError: null };
  }),
  on(ConfigActions.errorGettingFixtures, (state, error: Error) => {
    console.error(error);
    return { ...state, fixturesError: error };
  }),
  // Browser Actions
  on(ConfigActions.useAllBrowsers, state => ({ ...state, browsers: ['all'] })),
  on(ConfigActions.clearAllBrowsers, state => ({ ...state, browsers: [] })),
  on(ConfigActions.addBrowser, (state, { payload }) => ({
    ...state,
    browsers: [...state.browsers, payload]
  })),
  on(ConfigActions.removeBrowser, (state, { payload }) => ({
    ...state,
    browsers: state.browsers.splice(state.browsers.indexOf(payload), 1)
  })),
  // Boolean Flag Actions
  on(ConfigActions.toggleAllBrowsers, state => ({ ...state, allBrowsers: !state.allBrowsers })),
  on(ConfigActions.toggleAllFixtures, state => ({ ...state, allFixtures: !state.allFixtures })),
  on(ConfigActions.toggleHeadless, state => ({ ...state, headless: !state.headless })),
  // Fixture Actions
  on(ConfigActions.useAllFixtures, state => ({ ...state, browsers: ['./testing/fixtures'] })),
  on(ConfigActions.clearAllFixtures, state => ({ ...state, src: [] })),
  on(ConfigActions.addFixture, (state, { payload }) => ({
    ...state,
    src: [...state.src, payload]
  })),
  on(ConfigActions.removeFixture, (state, { payload }) => ({
    ...state,
    src: state.src.splice(state.src.indexOf(payload), 1)
  })),
  // Send Data Actions
  on(ConfigActions.submitConfig, state => state),
  on(ConfigActions.successSubmitConfig, (state, payload) => {
    return { ...state, sendConfigError: null };
  }),
  on(ConfigActions.errorSubmitConfig, (state, error: Error) => {
    console.error(error);
    return { ...state, sendConfigError: error };
  }),
);
