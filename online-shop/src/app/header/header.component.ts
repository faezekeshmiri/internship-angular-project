import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faSearch , faBars , faSignInAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  faBars = faBars;
  faSignInAlt = faSignInAlt;
  constructor() { }

  ngOnInit() {
  }

}
