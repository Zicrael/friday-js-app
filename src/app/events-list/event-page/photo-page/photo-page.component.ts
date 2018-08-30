import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../../core/providers/events.service';
import { EventItemModel, PhotosModel } from '../../../core/models/event-item.model';


@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss'],
})
export class PhotoPageComponent implements OnInit {
  public selectedPhoto: PhotosModel;
  public selectedEvent: EventItemModel;
  constructor(private activeRouter: ActivatedRoute, private eventsService: EventsService, private router: Router) { }


  closePhotoView(event: Event) {
    const target = event.target;
    if (
      (target as HTMLElement).classList.contains('modal-view-photo') ||
      (target as HTMLElement).classList.contains('close-modal-view')) {
      this.router.navigate(['../../'], {relativeTo: this.activeRouter});
    }
  }

  ngOnInit() {
    this.activeRouter.params.subscribe(
      (params) => {
        this.eventsService.activeEvent.subscribe(
          (activeEvent: EventItemModel) => {
            if (activeEvent) {
              this.selectedEvent = activeEvent;
              this.selectedPhoto = activeEvent.photos.find((el) => el.id === parseInt(params.photoId, null));
            }
          }
        );
      }
    );
  }
  // ngOnDestroy(): void {
  //   this.eventsService.activeEvent.unsubscribe();
  // }

}
