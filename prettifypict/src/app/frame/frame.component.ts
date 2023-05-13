import { Component } from '@angular/core';
import { PICTURES } from 'src/app/pictures';
import { TextService } from '../text.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent {
  constructor(private textService: TextService) { }

  texts = ''
  pictureTitle = PICTURES[0].pictureTitle

  ngOnInit(): void {
    this.getText()
  }

  getText() {
    this.textService.getTextFile().subscribe((results: string) => this.texts = results)
  }
}
