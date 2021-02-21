import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GistsComponent } from './gists/gists.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { GistsForksComponent } from './gists-forks/gists-forks.component';

@NgModule({
  declarations: [GistsComponent, GistsForksComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [GistsComponent]
})
export class GistsModule { }
