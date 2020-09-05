import { FESTIVALS } from './mock-festival';
import { Event } from './event';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  constructor() { }
  getFestivals():Observable<Event[]>{
    return of(FESTIVALS);
  }
}
