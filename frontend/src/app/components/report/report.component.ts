import { Component, OnInit } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';
import { ReportService } from 'src/app/services/report.service';
import { IReport } from 'src/app/models/report.model';
import { Report } from 'src/app/models/ngrxReport.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import * as ListSelectors from '../../store/selectors/list.selectors';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  targetReport$: Observable<Report> = this.store.pipe(
    select(fromStore.selectTargetReport)
  );

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
