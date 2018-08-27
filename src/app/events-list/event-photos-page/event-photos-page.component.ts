import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../core/providers/events.service';
import { EventItemModel } from '../../core/models/event-item.model';

@Component({
  selector: 'app-event-photos-page',
  templateUrl: './event-photos-page.component.html',
  styleUrls: ['./event-photos-page.component.scss']
})
export class EventPhotosPageComponent implements OnInit {

  eventItem: EventItemModel;

  constructor(private activeRouter: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(
      (params) => {
        this.eventsService.eventById(params.id).subscribe(
          (data: EventItemModel) => {
            this.eventItem = data;
          }, (error) => {
            console.log(error);
          }
        );
      }
    );
  }

}
