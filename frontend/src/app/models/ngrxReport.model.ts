export interface MetaType {
  Group: string;
  GroupID: string;
  Page: string;
  PageID: string;
}

export interface StoryMeta extends MetaType {
  TestID: string;
  TestNu: string;
}

export interface FixtureMeta extends MetaType {
  FixtureID: string;
  // rundate: string;
}

export interface Story {
  name: string;
  meta: StoryMeta;
  errs: string[];
  durationMs: number;
  screenshotPath: string;
  skipped: boolean;
}

export interface Fixture {
  name: string;
  path: string;
  meta: FixtureMeta;
  tests: Story[];
  passed: number; // must be generated
  total: number; // must be generated
  skipped: number; // must be generated
  failed: number; // must be generated
}

export interface Report {
  id: number;
  startTime: string;
  endTime: string;
  userAgents: string[];
  passed: number;
  total: number;
  skipped: number;
  failed: number; // must be generated
  fixtures: Fixture[];
  warnings: string[];
}
