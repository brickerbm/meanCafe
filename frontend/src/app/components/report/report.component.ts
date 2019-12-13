import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/transfer.service';
import { ReportService } from 'src/app/report.service';
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
      console.log(this.report);
    });
  }
}
