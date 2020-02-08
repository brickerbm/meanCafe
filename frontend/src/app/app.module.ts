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
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { ReportComponent } from './components/report/report.component';
import { ConfigComponent } from './components/config/config.component';
import { ReportService } from './services/report.service';
import { ConfigService } from './services/config.service';
import * as fromList from './store/reducers/list.reducer';
import * as fromConfig from './store/reducers/config.reducer';
import { ConfigEffects } from './store/effects/config.effects';
import { ListEffects } from './store/effects/list.effects';
import { environment } from 'src/environments/environment';

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
    MatExpansionModule,
    StoreModule.forRoot({ list: fromList.reducer, config: fromConfig.reducer }),
    EffectsModule.forRoot([ConfigEffects, ListEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [
    ReportService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
