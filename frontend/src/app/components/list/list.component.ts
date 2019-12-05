import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { IReport } from '../../models/report.model';
import { ReportService } from '../../report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  reports: IReport[];
  displayedColumns = ['ID', 'startTime', 'passed', 'skipped', 'total', 'actions'];

  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit() {
    this.fetchReports();
  }

  fetchReports() {
    this.reportService
      .getReport()
      .subscribe((data: IReport[]) => {
        this.reports = data;
        console.log('Data requested...');
        console.log(this.reports);
      });
  }

  viewReport(id) {
    this.router.navigate(['/report/${id}']);
  }

  viewConfig(id) {
    this.router.navigate(['/config/${id']);
  }

  deleteReport(id) {
    this.reportService.deleteReport(id).subscribe(() => {
      this.fetchReports();
    });
  }
}
