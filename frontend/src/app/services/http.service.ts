import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../models/ngrxReport.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private ApiURL = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getFixtures(): Observable<string[]> {
    return this.http.get<string[]>(`${this.ApiURL}/fixtures`);
  }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.ApiURL}/reports`);
  }

  sendConfigData(data: { browsers: string[], src: string[], headless: boolean }): Observable<string> {
    return this.http.post<string>(`${this.ApiURL}/config/write`, data);
  }

  deleteReport(report: Report): Observable<Report> {
    return this.http.get<Report>(`${this.ApiURL}/reports/delete/${report.id}`);
  }
}
