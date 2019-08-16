import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { AboutComponent } from './about-component/about-component';
import { SourcesComponent } from './sources-component/sources-component';
import { TopNewsComponent } from './top-news-component/top-news-component';
import { ErrorComponent } from './error-component/error-component';
import { TopnavbarComponent } from './shared/components/topnavbar/topnavbar.component';
import { WeatherWindowComponent } from './shared/components/weather-window/weather-window.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SourcesComponent,
    TopNewsComponent,
    ErrorComponent,
    TopnavbarComponent,
    WeatherWindowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
