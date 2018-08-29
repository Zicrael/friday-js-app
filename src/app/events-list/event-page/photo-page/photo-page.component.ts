import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../../core/providers/events.service';
import { EventItemModel, PhotosModel } from '../../../core/models/event-item.model';


@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss']
})
export class PhotoPageComponent implements OnInit {
  public selectedPhoto: PhotosModel;
  constructor(private activeRouter: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(
      (params) => {
        console.log(params);
        this.eventsService.eventById(params.id).subscribe(
          (data: EventItemModel) => {
            this.selectedPhoto = data.photos[params.photoId];
            console.log(this.selectedPhoto);
          }, (error) => {
            console.log(error);
          }
        );
      }
    );
  }

}
