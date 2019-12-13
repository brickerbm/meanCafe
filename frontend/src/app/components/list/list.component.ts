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
  displayedColumns = ['ID', 'startTime', 'passed', 'skipped', 'failed', 'total', 'actions'];
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
}
