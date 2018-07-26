import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TrainingDetailsPage } from "./training-details";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [TrainingDetailsPage],
	imports: [IonicPageModule.forChild(TrainingDetailsPage), TranslateModule],
	exports: [TrainingDetailsPage]
})
export class TrainingDetailsPageModule {}
