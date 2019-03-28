import { Component } from '@angular/core';

@Component({
  selector: "ct-event-list",
  templateUrl: "event-list.component.html"
})
export class eventListComponent {

  event: any = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    imageUrl: './assets/images/angularconnect-shild.png',
    location: {
      address: '1057 DI',
      city: 'kolhapur',
      country: 'india'
    }
  };

  handleEventClick(data) {
    console.log(data);
  }

  fromThumb(data): void {
    console.log(data)
  }
}
