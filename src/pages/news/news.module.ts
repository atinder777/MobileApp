import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { NewsPage } from "./news";

// TranslateModule has to be imported everywhere its used.
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

import { ExpandableLayout1Module } from "../../components/list-view/expandable/layout-1/expandable-layout-1.module";

@NgModule({
	declarations: [NewsPage],
	imports: [IonicPageModule.forChild(NewsPage), TranslateModule, ExpandableLayout1Module],
	exports: [NewsPage]
})
export class NewsPageModule {}
