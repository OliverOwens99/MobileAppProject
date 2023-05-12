import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from "../Services/data.service";
import { IonicModule } from '@ionic/angular';

import { MatchDataPageRoutingModule } from './match-data-routing.module';

import { MatchDataPage } from './match-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchDataPageRoutingModule,
  ],
  declarations: [MatchDataPage],
  providers: [DataService]
})
export class MatchDataPageModule {}
