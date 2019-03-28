import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ct-event-thumbnail',
  templateUrl: './event-thumbnail.component.html'
})
export class EventThumbnailComponent {

  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  HandleClickMe(): void {
    this.eventClick.emit('Shivprasad');
  }
  name: string = "Shivprasad";
}
