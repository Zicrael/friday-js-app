import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListRouterModule } from './events-list.router.module';
import { PreloaderModule } from '../ui/preloader/preloader.module';
import {  EventsListComponent } from './events-list.component';
import { EventPageComponent } from './event-page/event-page.component';
import { PhotoPageComponent } from './event-page/photo-page/photo-page.component';
@NgModule({
  imports: [
    CommonModule,
    EventsListRouterModule,
    PreloaderModule
  ],
  declarations: [EventsListComponent, EventPageComponent, PhotoPageComponent]
})
export class EventsListModule { }
