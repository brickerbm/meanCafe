import * as fromConfig from './config.state';
import * as fromList from './list.state';

export interface AppState {
  list: fromList.ListState;
  config: fromConfig.ConfigState;
}

export * from './config.state';
export * from './list.state';
