import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gist} from '../model/gist';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GistsService {

  constructor(private http: HttpClient) { }

  fetchGistsForUser(username: string): Observable<Gist[]> {
    return this.http.get<Gist[]>('https://api.github.com/users/' + username + '/gists');
  }

  fetchLast3ForksForGistId(gistId: string): Observable<Gist[]> {
    return this.http.get<Gist[]>('https://api.github.com/gists/' + gistId + '/forks?per_page=3&page=0');
  }
}
