import { Component, OnInit } from '@angular/core';
import { faInstagram, faTelegram , faFacebook} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  insta = faInstagram;
  telegram = faTelegram;
  facebook = faFacebook;
  constructor() { }

  ngOnInit() {
  }

}
