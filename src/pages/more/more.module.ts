import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MorePage } from "./more";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [MorePage],
	imports: [IonicPageModule.forChild(MorePage), TranslateModule]
})
export class MorePageModule {}
