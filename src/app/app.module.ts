import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Services
import { SharedService } from './services/shared.service';
import { SidebarService } from './services/sidebar.service';

// Routes
import { FeatureRoutingModule } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadComponent } from './shared/bread/bread.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    DashboardComponent,
    ProgressComponent,
    HeaderComponent,
    SidebarComponent,
    BreadComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureRoutingModule
  ],
  providers: [
    SharedService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
