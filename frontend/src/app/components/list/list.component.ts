import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import { Observable } from 'rxjs';
import { Report } from 'src/app/models';
import * as fromStore from '../../store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list$: Observable<fromStore.ListState> = this.store.pipe(
    select(fromStore.selectList)
  );

  displayedColumns = ['startTime', 'passed', 'skipped', 'failed', 'total', 'actions'];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(fromStore.GetReports());
  }

  ngOnInit() {}

  selectReport(report: Report) {
    this.store.dispatch(fromStore.SetTargetReport({ report }));
  }

  deleteReport(report: Report) {
    this.store.dispatch(fromStore.DeleteReport({ report }));
  }
}
