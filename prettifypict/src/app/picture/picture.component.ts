import { Component } from '@angular/core';
import { CONFIGURE } from 'src/app/configure';
import { PICTURES } from 'src/app/pictures';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  picturePath = PICTURES[0].picturePath ? PICTURES[0].picturePath + '/' : ''
  pictureFullPath = 'assets/' + CONFIGURE.imageFolder + '/' + this.picturePath + PICTURES[0].pictureName + '.' + PICTURES[0].pictureExtension
  slug = PICTURES[0].slug
}
