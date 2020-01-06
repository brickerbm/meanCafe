import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatTableModule,
        MatDividerModule,
        MatSnackBarModule,
        MatSlideToggleModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { ReportComponent } from './components/report/report.component';
import { ConfigComponent } from './components/config/config.component';
import { ReportService } from './services/report.service';
import { ConfigService } from './services/config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ReportComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatExpansionModule
  ],
  providers: [
    ReportService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
