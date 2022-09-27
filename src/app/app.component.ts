import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  colsForVideo: number = 6;

  ColsForVideo() {
    return 'col-' + this.colsForVideo;
  }

  ColsForEvents() {
    return 'col-' + (12 - this.colsForVideo);
  }

  videoTime = 0;
  videoTimeChanged(e) {
    this.videoTime = e;
  }

  setVideoSize(s) {
    this.colsForVideo = s;
  }
}
