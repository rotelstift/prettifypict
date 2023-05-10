import { Component } from '@angular/core';
import { CONFIGURE } from 'src/assets/settings/configure';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  siteTitle = CONFIGURE.siteTitle
}
