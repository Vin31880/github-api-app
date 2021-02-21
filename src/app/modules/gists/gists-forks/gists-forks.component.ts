import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Gist} from '../../../model/gist';
import {GistsService} from '../../../services/gists.service';

@Component({
  selector: 'app-gists-forks',
  templateUrl: './gists-forks.component.html',
  styleUrls: ['./gists-forks.component.css']
})
export class GistsForksComponent implements OnInit {

  urlList: string[] = [];
  gistId: string;
  forkList: Gist[] = [];

  constructor(private route: ActivatedRoute,
              private gistService: GistsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        console.log(params);
        this.gistId = params['id'];
        this.fetchLast3Forks(this.gistId);
      }
    );
  }

  fetchLast3Forks(gistId: string) {
    let gistList: Gist[];
    this.gistService.fetchLast3ForksForGistId(gistId.trim()).subscribe(
      (data: Gist[]) => {
        gistList = data;
        this.forkList = gistList;
        console.log(gistList);
        for (const item of gistList) {
          this.urlList.push(item.owner.avatar_url);
        }
      }
    );

  }
}
