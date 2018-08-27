import { Component, OnInit} from '@angular/core';
import { EventsService } from '../core/providers/events.service';
import { EventItemModel } from '../core/models/event-item.model';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  public eventsList: EventItemModel[];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.eventsList().subscribe(
      (data: EventItemModel[]) => {
        this.eventsList = data;
      }, (error) => {
        console.log(error);
      }
    );
  }
}
