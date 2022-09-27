import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { CourtComponent } from './court/court.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, VideoComponent, CourtComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
