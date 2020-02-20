export interface ConfigState {
  browsers: string[];
  src: string[];
  fixtures: string[];
  fError: Error;
  headlessFlag: boolean;
  allBrowsersFlag: boolean;
  allFixturesFlag: boolean;
  scError: Error;
}

export const initialConfigState: ConfigState = {
  browsers: ['all'],
  src: ['../automated_testing/fixtures'],
  fixtures: [],
  fError: null,
  headlessFlag: true,
  allBrowsersFlag: true,
  allFixturesFlag: true,
  scError: null,
};
