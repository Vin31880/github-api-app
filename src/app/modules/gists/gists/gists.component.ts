import {Component, OnInit} from '@angular/core';
import {Gist} from '../../../model/gist';
import {GistsService} from '../../../services/gists.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gists',
  templateUrl: './gists.component.html',
  styleUrls: ['./gists.component.css']
})
export class GistsComponent implements OnInit {

  gists: Gist[] = [];
  gistUserName: string;

  constructor(private gistService: GistsService,
              private router: Router) {
  }

  ngOnInit() {
    this.listAllPersons();
  }

  private listAllPersons() {
    this.gistService.fetchGistsForUser('').subscribe(
      (data: Gist[]) => {
        this.gists = data;
        console.log(data.length);
      }
    );
  }

  fetchGistsForUserName() {
    if (this.gistUserName) {
      this.gistService.fetchGistsForUser(this.gistUserName).subscribe(
        (data: Gist[]) => {
          this.gists = data;
          console.log(data.length);
        }
      );
    }
  }

  navigateToForkDetails(gistId: string) {
     this.router.navigate(['/gist', gistId.trim()]);
  }
}
