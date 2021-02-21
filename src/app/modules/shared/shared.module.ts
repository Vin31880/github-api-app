import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  declarations: [CardComponent, BadgeComponent],
  imports: [
    CommonModule
  ],
  exports:[CardComponent, BadgeComponent]
})
export class SharedModule { }
