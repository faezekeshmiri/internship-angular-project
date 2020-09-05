import { CAMPAIGNS } from './mock-campaign';
import { Event } from './event';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor() { }
  getCampaigns():Observable<Event[]>{
    return of(CAMPAIGNS);
  }
}
