import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';
import { ReportService } from 'src/app/services/report.service';
import { IReport } from 'src/app/models/report.model';
import { Report } from 'src/app/models/ngrxReport.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import * as ListSelectors from '../../store/selectors/list.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportID: string;
  report: IReport;

  report$: Observable<Report>;

  constructor(
    private ts: TransferService,
    private rs: ReportService,
    private store: Store<AppState>
    ) { }

  ngOnInit() {
    this.ts.currentVal.subscribe(currentID => this.reportID = currentID);
    this.fetchReport(this.reportID);
    this.report$ = this.store.pipe(select(state => ListSelectors.selectSelectedReport(state)));
  }

  fetchReport(id: string) {
    this.rs
    .getReportById(id)
    .subscribe((data: IReport) => {
      this.report = data;
      console.log('Data Requested');
      this.report.failed = this.rs.getTotalFailed(this.report);
      for (const item of this.report.fixtures) {
        item.passed = this.rs.getNumPassed(item);
        item.failed = this.rs.getNumFailed(item);
        item.skipped = this.rs.getNumSkipped(item);
        item.total = item.tests.length;
      }
      console.log(this.report);
    });
  }
}
