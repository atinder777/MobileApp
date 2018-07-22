import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";

// Has to import the translate module in every page you use it.
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

// Imports the Tabs Layout
import { TabsLayout1Module } from "../../components/tabs/layout-1/tabs-layout-1.module";

@NgModule({
	declarations: [HomePage],
	imports: [IonicPageModule.forChild(HomePage), TranslateModule, TabsLayout1Module],
	exports: [HomePage],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
