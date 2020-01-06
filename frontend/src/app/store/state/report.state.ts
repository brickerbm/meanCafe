import { IReport } from '../../models/report.model';

export interface IReportState {
  reports: IReport[];
  selectedReport: IReport;
}

export const initialReportState: IReportState = {
  reports: null,
  selectedReport: null
};
