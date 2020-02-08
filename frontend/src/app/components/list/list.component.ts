import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { map, tap } from 'rxjs/operators';

import { IReport } from '../../models/report.model';
import { ReportService } from '../../services/report.service';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/services/transfer.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { Report } from 'src/app/models/ngrxReport.model';
import * as ListActions from '../../store/actions/list.actions';
import * as ListSelectors from '../../store/selectors/list.selectors';
import { reportInvalidActions } from '@ngrx/effects/src/effect_notification';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  // template: `
  //   <div *ngFor="let report of reports$ | async">
  //     {{ report.startTime }}
  //   </div>`,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // reports: IReport[];
  displayedColumns = ['startTime', 'passed', 'skipped', 'failed', 'total', 'actions'];
  reportID: string;
  dataSource;

  reports$ = this.store.pipe(select(state => ListSelectors.selectReports(state)));
  reportsError$ = this.store.pipe(select(state => ListSelectors.selectReportsError(state)));
  componentState$ = combineLatest([this.reports$, this.reportsError$]).pipe(
    map(([reports, errors]) => ({ reports, errors })),
    tap(cs => {
      console.log('component state', cs);
    })
  );
  constructor(private rs: ReportService, private ts: TransferService, private router: Router, private store: Store<AppState>) {
    this.store.dispatch(ListActions.beginGetReports());

  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    // this.fetchReports();
    // this.ts.currentVal.subscribe(currentID => (this.reportID = currentID));
    // this.dataSource = new MatTableDataSource(this.reports);
    // this.dataSource.sort = this.sort;

    // this.reports$.forEach(x => console.log(x));
    // if (this.reportsError$) {
    //   console.log(this.reportsError$);
    // }
  }

  setSelectedReport(report: { payload: Report }) {
    this.store.dispatch(ListActions.setSelectedReport(report));
    console.log(this.store.select(state => ListSelectors.selectSelectedReport(state)));
  }

  viewReport(id) {
    this.ts.changeVal(id);
  }

  deleteReport(report: Report) {
    this.store.dispatch(ListActions.beginDeleteReport(report));
    // this.rs.deleteReport(report.id).subscribe(() => {
      // this.fetchReports();
    // });
  }

  dateManipulator(dateString: string) {
    const dateObj = new Date(dateString);
    // let date = dateObj.getDate();
    // let month = dateObj.getMonth();
    // let year = dateObj.getFullYear();
    return dateObj.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  pad(n) {
    return n < 10 ? '0' + n : n;
  }
}
