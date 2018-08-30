import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../core/providers/events.service';
import { EventItemModel } from '../../core/models/event-item.model';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  public eventItem: EventItemModel;

  constructor(private activeRouter: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(
      (params) => {
        this.eventsService.eventById(params.id).subscribe(
          (data: EventItemModel) => {
            this.eventItem = data;
            this.eventsService.activeEvent.next(data);
          }, (error) => {
            console.log(error);
          }
        );
      }
    );
  }
}
