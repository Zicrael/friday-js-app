import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpEventsService } from './http-services/http-events.service';
import { EventsService } from './providers/events.service';

const HTTP_PROVIDERS = [
  HttpEventsService,
];
const SERVICE_PROVIDERS = [
  EventsService
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...HTTP_PROVIDERS, ...SERVICE_PROVIDERS
  ]
})
export class CoreModule { }
