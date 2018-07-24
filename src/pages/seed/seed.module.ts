import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SeedPage } from "./seed";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [SeedPage],
	imports: [IonicPageModule.forChild(SeedPage), TranslateModule],
	exports: [SeedPage]
})
export class SeedPageModule {}
