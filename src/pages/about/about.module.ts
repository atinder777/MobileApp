import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AboutPage } from "./about";
import { MapsLayout2Module } from "../../components/maps/layout-2/maps-layout-2.module";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [AboutPage],
	imports: [IonicPageModule.forChild(AboutPage), MapsLayout2Module, TranslateModule],
	exports: [AboutPage]
})
export class AboutPageModule {}
