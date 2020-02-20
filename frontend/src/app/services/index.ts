import { ConfigBuilderService } from './config-builder.service';
import { ConfigService } from './config.service';
import { FixtureService } from './fixture.service';
import { HttpService } from './http.service';
import { InMemoryDataService } from './in-memory-data.service';
import { ReportService } from './report.service';
import { TransferService } from './transfer.service';

export const services: any[] = [
  ConfigBuilderService,
  ConfigService,
  FixtureService,
  HttpService,
  InMemoryDataService,
  ReportService,
  TransferService];

export * from './config-builder.service';
export * from './config.service';
export * from './fixture.service';
export * from './http.service';
export * from './in-memory-data.service';
export * from './report.service';
export * from './transfer.service';
