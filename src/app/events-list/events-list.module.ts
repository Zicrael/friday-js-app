import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListRouterModule } from './events-list.router.module';
import { PreloaderModule } from '../ui/preloader/preloader.module';
import {  EventsListComponent } from './events-list.component';
import { EventPageComponent } from './event-page/event-page.component';
import { EventPhotosPageComponent } from './event-photos-page/event-photos-page.component';
import { ModalPhotoModule } from '../ui/modal-photo/modal-photo.module';

@NgModule({
  imports: [
    CommonModule,
    EventsListRouterModule,
    PreloaderModule,
    ModalPhotoModule
  ],
  declarations: [EventsListComponent, EventPageComponent, EventPhotosPageComponent]
})
export class EventsListModule { }
