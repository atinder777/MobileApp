import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TrainingPage } from "./training";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [TrainingPage],
	imports: [IonicPageModule.forChild(TrainingPage), TranslateModule],
	exports: [TrainingPage]
})
export class TrainingPageModule {}
