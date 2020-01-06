export interface IMetaType {
  Group: string;
  GroupID: string;
  Page: string;
  PageID: string;
}

export interface IStoryMeta extends IMetaType {
  TestID: string;
  TestNu: string;
}

export interface IFixtureMeta extends IMetaType {
  FixtureID: string;
  rundate: string;
}

export interface IStory {
  name: string;
  meta: IStoryMeta;
  errs: string[];
  durationMs: number;
  screenshotPath: string;
  skipped: boolean;
}

export interface IFixture {
  name: string;
  path: string;
  meta: IFixtureMeta;
  tests: IStory[];
  passed: number;
  total: number;
  skipped: number;
  failed: number;
}

export interface IReport {
  id: string;
  startTime: string;
  endTime: string;
  userAgents: string[];
  passed: number;
  total: number;
  skipped: number;
  failed: number;
  fixtures: IFixture[];
  warnings: string[];
}
