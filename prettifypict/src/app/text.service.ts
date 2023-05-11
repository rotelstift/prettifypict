import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PICTURES } from './pictures';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  constructor(private http: HttpClient) { }

  textPath = 'assets/texts/' + PICTURES[0].slug + '.txt'

  getTextFile() {
    console.log('hogs' + this.textPath)
    return this.http.get(this.textPath, {responseType: 'text'})
  }
}
