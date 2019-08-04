import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about-component/about-component';
import { SourcesComponent } from './sources-component/sources-component';
import { TopNewsComponent } from './top-news-component/top-news-component';
import { ErrorComponent } from './error-component/error-component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'sources', component: SourcesComponent },
  { path: 'top_news', component: TopNewsComponent },
  { path: '', redirectTo: 'top_news', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
