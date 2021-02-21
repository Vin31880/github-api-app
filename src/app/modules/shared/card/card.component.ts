import {Component, Input, OnInit} from '@angular/core';
import {Gist} from '../../../model/gist';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gist: Gist;

  languages: string[] = [];

  constructor() { }

  ngOnInit() {
    if (this.gist) {
      this.getFileLanguagesForGist();
    }
  }

  getFileLanguagesForGist() {
    const files = Object.values(this.gist.files);
    if (files) {
      for (const item of files) {
        this.languages.push(item.language);
      }
    }
  }

  getDescription() {
    return this.gist.description ? this.gist.description : '--';
  }
}
