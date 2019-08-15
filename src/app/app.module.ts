import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { AboutComponent } from './about-component/about-component';
import { SourcesComponent } from './sources-component/sources-component';
import { TopNewsComponent } from './top-news-component/top-news-component';
import { ErrorComponent } from './error-component/error-component';
import { TopnavbarComponent } from './shared/components/topnavbar/topnavbar.component';
import { SidenavbarComponent } from './shared/components/sidenavbar/sidenavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SourcesComponent,
    TopNewsComponent,
    ErrorComponent,
    SidenavbarComponent,
    TopnavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
