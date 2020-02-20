import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Report } from '../models/ngrxReport.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private ApiURL = 'http://localhost:4000';

  private rUrl = 'api/reports';
  private fUrl = 'api/fixtures';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getFixtures(): Observable<string[]> {
    return this.http
      .get<string[]>(this.fUrl)
      .pipe(
        tap(_ => console.log('fetched fixtures', _)),
        catchError(this.handleError<string[]>('getFixtures', []))
      );
  }

  getReports(): Observable<Report[]> {
    return this.http
      .get<Report[]>(this.rUrl)
      .pipe(
        tap(_ => console.log('fetched reports', _)),
        catchError(this.handleError<Report[]>('getReports', []))
      );
  }

  sendConfigData(data: { browsers: string[], src: string[], headless: boolean }): Observable<string> {
    return this.http.post<string>(`${this.ApiURL}/config/write`, data);
  }

  deleteReport(report: Report | number): Observable<Report> {
    const id = typeof report === 'number' ? report : report.id;
    const url = `${this.rUrl}/${id}`;

    return this.http
      .delete<Report>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`deleted report id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
