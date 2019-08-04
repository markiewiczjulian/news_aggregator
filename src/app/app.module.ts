import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about-component/about-component';
import { SourcesComponent } from './sources-component/sources-component';
import { TopNewsComponent } from './top-news-component/top-news-component';
import { ErrorComponent } from './error-component/error-component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SourcesComponent,
    TopNewsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
