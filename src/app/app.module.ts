import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {LayoutModule} from './modules/layout/layout.module';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './modules/routing/routing.module';
import {HttpClientModule} from '@angular/common/http';
import {GistsModule} from './modules/gists/gists.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule,
    RoutingModule,
    HttpClientModule,
    GistsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
