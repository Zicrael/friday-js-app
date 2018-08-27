import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from 'src/app/helpers/endpoints';

@Injectable()
export class HttpEventsService {

  constructor(private http: HttpClient) {

  }

  public eventsList() {
    return this.http.get(Endpoints.events);
  }

  public eventById(id) {
    return this.http.get(Endpoints.events + id);
  }
}
