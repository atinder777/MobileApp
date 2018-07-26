import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TrainingGridPage } from "./training-grid";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [TrainingGridPage],
	imports: [IonicPageModule.forChild(TrainingGridPage), TranslateModule],
	exports: [TrainingGridPage]
})
export class TrainingGridPageModule {}
