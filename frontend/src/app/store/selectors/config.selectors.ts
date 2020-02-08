import { AppState } from '../state';
import { createSelector } from '@ngrx/store';
import { ConfigState } from '../state/config.state';


export const selectConfig = (state: AppState) => state.config;

export const selectBrowsers = createSelector(
  selectConfig,
  (state: ConfigState) => state.browsers
);

export const selectSrc = createSelector(
  selectConfig,
  (state: ConfigState) => state.src
);

export const selectFixtures = createSelector(
  selectConfig,
  (state: ConfigState) => state.fixtureList
);

export const selectGetFixturesError = createSelector(
  selectConfig,
  (state: ConfigState) => state.getFixturesError
);

export const selectHeadless = createSelector(
  selectConfig,
  (state: ConfigState) => state.headless
);

export const selectAllBrowsers = createSelector(
  selectConfig,
  (state: ConfigState) => state.allBrowsers
);

export const selectAllFixtures = createSelector(
  selectConfig,
  (state: ConfigState) => state.allFixtures
);

export const selectSendConfigError = createSelector(
  selectConfig,
  (state: ConfigState) => state.sendConfigError
);
