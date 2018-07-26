import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingListPage } from './training-list';

@NgModule({
  declarations: [
    TrainingListPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingListPage),
  ],
})
export class TrainingListPageModule {}
