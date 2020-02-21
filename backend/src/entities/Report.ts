export interface MetaType {
    Group: string;
    GroupID: string;
    Page: string;
    PageID: string;
}

export interface StoryMeta extends MetaType {
    TestID: string;
    TestNum: string;
}

export interface FixtureMeta extends MetaType {
    FixtureID: string;
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
    passed?: number;
    total?: number;
    skipped?: number;
    failed?: number;
}

export interface Report {
    id?: string | number;
    startTime: string;
    endTime: string;
    userAgents: string[];
    passed: number;
    total: number;
    skipped: number;
    failed?: number;
    fixtures: Fixture[];
    warnings: string[];
}
