import { Injectable } from '@angular/core';
import { HttpEventsService } from '../http-services/http-events.service';

@Injectable()
export class EventsService {

  constructor(private httpEvents: HttpEventsService ) {

  }

  public eventsList() {
    return this.httpEvents.eventsList();
  }

  public eventById(id) {
    return this.httpEvents.eventById(id);
  }
}
