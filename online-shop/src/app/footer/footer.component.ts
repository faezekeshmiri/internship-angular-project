import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faSearch , faBars , faSignInAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faBars = faBars;
  faSignInAlt = faSignInAlt;
  constructor() { }

  ngOnInit() {
  }

}
