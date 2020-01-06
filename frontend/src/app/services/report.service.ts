import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReport } from '../models/report.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // READ
  getReport() {
    return this.http.get(`${this.uri}/reports`);
  }

  getReportById(id) {
    return this.http.get(`${this.uri}/reports/${id}`);
  }

  // DELETE
  deleteReport(id) {
    return this.http.get(`${this.uri}/reports/delete/${id}`);
  }

  getTotalFailed(report: IReport): number {
    return report.total - (report.passed + report.skipped);
  }

  getNumPassed(fixture: any): number {
    let count = 0;
    for (const item of fixture.tests) {
      if (item.errs.length === 0 && item.skipped === false) {
        count++;
      }
    }
    return count;
  }

  getNumFailed(fixture: any): number {
    let count = 0;
    for (const item of fixture.tests) {
      if (item.errs.length > 0 && item.skipped === false) {
        count++;
      }
    }
    return count;
  }

  getNumSkipped(fixture: any): number {
    let count = 0;
    for (const item of fixture.tests) {
      if (item.skipped) {
        count++;
      }
    }
    return count;
  }
}
