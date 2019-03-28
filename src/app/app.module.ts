import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { eventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumnail.component';

@NgModule({
  declarations: [
    AppComponent,
    eventListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
