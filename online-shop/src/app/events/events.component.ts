import { FestivalService } from './../festival.service';
import { CampaignService } from './../campaign.service';
import { Event } from './../event';
import { Component, OnInit } from '@angular/core';
import { EventsService } from './../events.service';
import { faArrowCircleLeft , faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  leftArr = faArrowCircleLeft;
  rightArr = faArrowCircleRight;
  events: Event[];
  campaigns: Event[];
  festivals: Event[];

  constructor(private eventsService: EventsService , private campaignService: CampaignService ,
              private festivalService: FestivalService ) { }

  ngOnInit() {
    this.getEvents();
    this.getCampaigns();
    this.getFestivals();
  }
  getEvents(): void{
    this.eventsService.getEvents().subscribe(events => this.events = events);
  }
  getCampaigns(): void{
    this.campaignService.getCampaigns().subscribe(campaigns => this.campaigns = campaigns);
  }
  getFestivals(): void{
    this.festivalService.getFestivals().subscribe(festivals => this.festivals = festivals);
  }
}
