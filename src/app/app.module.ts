import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { environment } from '../environments/environment';
import { PrimeComponentsModule } from './primeComponents';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LoginComponent } from './components/login/login.component';
import { AuthentificationService } from './services/authentification.service';
import { WeightchartComponent } from './components/weightchart/weightchart.component';
import { DatabaseService } from './services/database.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarComponent,
    LoginComponent,
    WeightchartComponent,
    DashboardComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    DynamicDialogModule,
    PrimeComponentsModule
  ],
  providers: [
    AuthentificationService,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
