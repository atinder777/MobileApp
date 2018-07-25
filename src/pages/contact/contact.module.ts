import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ContactPage } from "./contact";
import { MapsLayout2Module } from "../../components/maps/layout-2/maps-layout-2.module";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [ContactPage],
	imports: [IonicPageModule.forChild(ContactPage), MapsLayout2Module, TranslateModule],
	exports: [ContactPage]
})
export class ContactPageModule {}
