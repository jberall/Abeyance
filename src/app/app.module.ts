import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbeyanceNavComponent } from './abeyance-nav/abeyance-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatDatepickerModule,
  MatRadioModule,
  MatGridListModule,
  MatMenuModule,
  MatTabsModule,
  MatBadgeModule,
  MatChipsModule
} from '@angular/material';
import { PolicySaveComponent } from './policy-save/policy-save.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsuredNameComponent } from './components/insured-name/insured-name.component';

@NgModule({
  declarations: [
    AppComponent,
    AbeyanceNavComponent,
    PolicySaveComponent,
    DashboardComponent,
    InsuredNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    MatBadgeModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
