import { Action, createReducer, on } from '@ngrx/store';
import * as ConfigActions from '../actions/config.actions';
import { initialConfigState, ConfigState } from '../state';

export const configReducer = createReducer(
  initialConfigState,
  // Fixture Retrieval
  on(ConfigActions.GetFixtures, state => state),
  on(ConfigActions.GetFixturesSuccess, (state, { fixturesList }) => {
    return { ...state, fixtures: fixturesList, fError: null };
  }),
  on(ConfigActions.GetFixturesFail, (state, error: Error) => {
    console.error(error);
    return { ...state, fError: error };
  }),
  // Browser Actions
  on(ConfigActions.UseAllBrowsers, state => ({ ...state, browsers: ['all'] })),
  on(ConfigActions.ClearAllBrowsers, state => ({ ...state, browsers: [] })),
  on(ConfigActions.AddBrowser, (state, { browser }) => ({
    ...state,
    browsers: [...state.browsers, browser]
  })),
  on(ConfigActions.RemoveBrowser, (state, { browser }) => ({
    ...state,
    browsers: state.browsers.filter(val => val !== browser)
  })),
  // Boolean Flag Actions
  on(ConfigActions.ToggleAllBrowsers, state => ({ ...state, allBrowsersFlag: !state.allBrowsersFlag })),
  on(ConfigActions.ToggleAllFixtures, state => ({ ...state, allFixturesFlag: !state.allFixturesFlag })),
  on(ConfigActions.ToggleHeadless, state => ({ ...state, headlessFlag: !state.headlessFlag })),
  // Fixture Actions
  on(ConfigActions.UseAllFixtures, state => ({ ...state, browsers: ['../testing/fixtures'] })),
  on(ConfigActions.ClearAllFixtures, state => ({ ...state, src: [] })),
  on(ConfigActions.AddFixture, (state, { fixture }) => ({
    ...state,
    src: [...state.src, fixture]
  })),
  on(ConfigActions.RemoveFixture, (state, { fixture }) => ({
    ...state,
    src: state.src.filter(val => val !== fixture)
  })),
  // Send Data Actions
  on(ConfigActions.SendConfig, state => state),
  on(ConfigActions.SendConfigSuccess, (state, payload) => {
    return { ...state, scError: null };
  }),
  on(ConfigActions.SendConfigFail, (state, error: Error) => {
    console.error(error);
    return { ...state, scError: error };
  }),
);

export function reducer(state: ConfigState | undefined, action: Action): ConfigState {
  return configReducer(state, action);
}
