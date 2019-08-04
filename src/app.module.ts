import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app/app-routing.module';
import { SidenavbarComponent } from './app/shared/components/sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from './app/shared/components/topnavbar/topnavbar.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [SidenavbarComponent, TopnavbarComponent]
})
export class AppModule { }
