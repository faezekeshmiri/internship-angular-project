import { Component, OnInit } from '@angular/core';
import { faPhone , faMapMarkerAlt , faEnvelope} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  phone = faPhone;
  map = faMapMarkerAlt;
  email = faEnvelope;
  constructor() { }

  ngOnInit() {
  }

}
