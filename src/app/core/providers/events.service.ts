import { Injectable } from '@angular/core';
import { HttpEventsService } from '../http-services/http-events.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EventsService {

  public activeEvent = new BehaviorSubject<any>(null);

  constructor(private httpEvents: HttpEventsService ) {

  }

  public eventsList() {
    return this.httpEvents.eventsList();
  }

  public eventById(id) {
    return this.httpEvents.eventById(id);
  }
}
