import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GistsComponent} from '../gists/gists/gists.component';
import {GistsForksComponent} from '../gists/gists-forks/gists-forks.component';

const routes: Routes = [
  {path: 'gist', component: GistsComponent},
  {path: 'gist/:id', component: GistsForksComponent},
  {path: '**', component: GistsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
