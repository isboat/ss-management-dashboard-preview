import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MediaOnlyComponent } from './templates/media-only/media-only.component';
import { SafePipe } from './safe.pipe';
import { MenuOnlyComponent } from './templates/menu-only/menu-only.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuTopMediaBottomComponent } from './templates/menu-top-media-bottom/menu-top-media-bottom.component';
import { MediaTopMenuBottomComponent } from './templates/media-top-menu-bottom/media-top-menu-bottom.component';
import { CurrentDateTimeComponent } from './templates/current-datetime/current-datetime.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaOnlyComponent,
    SafePipe,
    MenuOnlyComponent,
    MenuTopMediaBottomComponent,
    MediaTopMenuBottomComponent,
    CurrentDateTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
