import { Component } from '@angular/core';
import { CONFIGURE } from 'src/app/configure';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  siteTitle = CONFIGURE.siteTitle
}
