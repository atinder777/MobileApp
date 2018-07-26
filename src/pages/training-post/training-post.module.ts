import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TrainingPostPage } from "./training-post";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [TrainingPostPage],
	imports: [IonicPageModule.forChild(TrainingPostPage), TranslateModule],
	exports: [TrainingPostPage]
})
export class TrainingPostPageModule {}
