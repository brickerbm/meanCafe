import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // CREATE
  addReport(
    startTime: string,
    endTime: string,
    userAgents: string[],
    passed: number,
    total: number,
    skipped: number,
    // failed: number,
    fixtures: string[],
    warnings: string[]) {
    const report = {
      startTime,
      endTime,
      userAgents,
      passed,
      total,
      skipped,
      // failed,
      fixtures,
      warnings
    };
    return this.http.post(`${this.uri}/reports/add`, report);
  }

  // READ
  getReport() {
    return this.http.get(`${this.uri}/reports`);
  }

  getReportById(id) {
    return this.http.get(`${this.uri}/reports/${id}`);
  }

  // UPDATE
  updateReport(
    id,
    startTime: string,
    endTime: string,
    userAgents: string[],
    passed: number,
    total: number,
    skipped: number,
    failed: number,
    fixtures: string[],
    warnings: string[]) {
      const report = {
        startTime,
        endTime,
        userAgents,
        passed,
        total,
        skipped,
        failed,
        fixtures,
        warnings
      };
      return this.http.post(`${this.uri}/reports/update/${id}`, report);
  }

  // DELETE
  deleteReport(id) {
    return this.http.get(`${this.uri}/reports/delete/${id}`);
  }
}
