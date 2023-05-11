import { Component } from '@angular/core';
import { PICTURES } from 'src/assets/settings/pictures';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {
  pictureTitle = PICTURES[0].pictureTitle
}
