import { Action, createReducer, on } from '@ngrx/store';
import * as ConfigActions from '../actions/config.actions';
import { initialConfigState, ConfigState } from '../state/config.state';

export const configReducer = createReducer(
  initialConfigState,
  // Fixture Retrieval
  on(ConfigActions.getFixtures, state => state),
  on(ConfigActions.successGetFixtures, (state, { fixtures }) => {
    return { ...state, fixtureList: fixtures, fixturesError: null };
  }),
  on(ConfigActions.errorGettingFixtures, (state, error: Error) => {
    console.error(error);
    return { ...state, fixturesError: error };
  }),
  // Browser Actions
  on(ConfigActions.useAllBrowsers, state => ({ ...state, browsers: ['all'] })),
  on(ConfigActions.clearAllBrowsers, state => ({ ...state, browsers: [] })),
  on(ConfigActions.addBrowser, (state, { browser }) => ({
    ...state,
    browsers: [...state.browsers, browser]
  })),
  on(ConfigActions.removeBrowser, (state, { browser }) => ({
    ...state,
    browsers: state.browsers.splice(state.browsers.indexOf(browser), 1)
  })),
  // Boolean Flag Actions
  on(ConfigActions.toggleAllBrowsers, state => ({ ...state, allBrowsers: !state.allBrowsers })),
  on(ConfigActions.toggleAllFixtures, state => ({ ...state, allFixtures: !state.allFixtures })),
  on(ConfigActions.toggleHeadless, state => ({ ...state, headless: !state.headless })),
  // Fixture Actions
  on(ConfigActions.useAllFixtures, state => ({ ...state, browsers: ['./testing/fixtures'] })),
  on(ConfigActions.clearAllFixtures, state => ({ ...state, src: [] })),
  on(ConfigActions.addFixture, (state, { fixture }) => ({
    ...state,
    src: [...state.src, fixture]
  })),
  on(ConfigActions.removeFixture, (state, { fixture }) => ({
    ...state,
    src: state.src.splice(state.src.indexOf(fixture), 1)
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

export function reducer(state: ConfigState | undefined, action: Action): ConfigState {
  return configReducer(state, action);
}
