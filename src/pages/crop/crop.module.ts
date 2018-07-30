import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CropPage } from "./crop";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [CropPage],
	imports: [IonicPageModule.forChild(CropPage), TranslateModule],
	exports: [CropPage]
})
export class CropPageModule {}
