import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FormPicturePage } from "./form-picture";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [FormPicturePage],
	imports: [IonicPageModule.forChild(FormPicturePage), TranslateModule],
	exports: [FormPicturePage]
})
export class FormPicturePageModule {}
