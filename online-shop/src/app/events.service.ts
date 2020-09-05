import { EVENTS } from './mock-events';
import { Event } from './event';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }
  getEvents():Observable<Event[]>{
    return of(EVENTS);
  }
}
