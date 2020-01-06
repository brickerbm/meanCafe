import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';
import { ReportService } from 'src/app/services/report.service';
import { IReport } from 'src/app/models/report.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportID: string;
  report: IReport;

  constructor(private ts: TransferService, private rs: ReportService) { }

  ngOnInit() {
    this.ts.currentVal.subscribe(currentID => this.reportID = currentID);
    this.fetchReport(this.reportID);
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
