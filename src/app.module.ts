import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app/app-routing.module';
import { TopnavbarComponent } from './app/shared/components/topnavbar/topnavbar.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [TopnavbarComponent]
})
export class AppModule { }
