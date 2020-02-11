import { Injectable } from '@angular/core';
import { Report } from '../models/ngrxReport.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const reports = [
      {
        id: 11,
        startTime: '2020-02-04T20:08:52.302Z',
        endTime: '2020-02-04T20:08:53.496Z',
        userAgents: [
          'Chrome 79.0.3945.130 / macOS 10.15.3'
        ],
        passed: 1,
        total: 1,
        skipped: 0,
        fixtures: [
          {
            name: 'Landing Page',
            path: '/Users/ben/Development/meanCafe/backend/testing/fixtures/landing-page.fixture.ts',
            meta: {},
            tests: [
              {
                name: 'Navigate to A/B Testing page',
                meta: {},
                errs: [],
                durationMs: 1185,
                screenshotPath: null,
                skipped: false
              }
            ]
          }
        ],
        warnings: []
      }
    ];
    return {reports};
  }

  genId(reports: Report[]): number {
    return reports.length > 0 ? Math.max(...reports.map(report => report.id)) + 1 : 11;
  }
  constructor() { }
}
