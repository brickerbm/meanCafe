import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { IReport } from '../../models/report.model';
import { ReportService } from '../../report.service';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/transfer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  reports: IReport[];
  displayedColumns = ['startTime', 'passed', 'skipped', 'failed', 'total', 'actions'];
  reportID: string;

  constructor(private rs: ReportService, private ts: TransferService, private router: Router) { }

  ngOnInit() {
    this.fetchReports();
    this.ts.currentVal.subscribe(currentID => this.reportID = currentID);
  }

  fetchReports() {
    this.rs
      .getReport()
      .subscribe((data: IReport[]) => {
        this.reports = data;
        console.log('Data requested...');
        // Added to fill out IReport objects
        for (const report of this.reports) {
          report.failed = this.rs.getTotalFailed(report);
          for (const item of report.fixtures) {
            item.passed = this.rs.getNumPassed(item);
            item.failed = this.rs.getNumFailed(item);
            item.skipped = this.rs.getNumSkipped(item);
            item.total = item.tests.length;
          }
        }
        // End addition
        console.log(this.reports);
      });
  }

  viewReport(id) {
    this.ts.changeVal(id);
    // this.router.navigate(['/report/${id}']);
  }

  viewConfig(id) {
    this.router.navigate(['/config/${id']);
  }

  deleteReport(id) {
    this.rs.deleteReport(id).subscribe(() => {
      this.fetchReports();
    });
  }

  dateManipulator(dateString: string) {
    const dateObj = new Date(dateString);
    // let date = dateObj.getDate();
    // let month = dateObj.getMonth();
    // let year = dateObj.getFullYear();
    return dateObj.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  pad(n) {
    return n < 10 ? '0' + n : n;
  }
}
