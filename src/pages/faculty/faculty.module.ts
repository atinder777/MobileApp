import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FacultyPage } from "./faculty";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [FacultyPage],
	imports: [IonicPageModule.forChild(FacultyPage), TranslateModule],
	exports: [FacultyPage]
})
export class FacultyPageModule {}
