import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { NewsPage } from "./news";

// TranslateModule has to be imported everywhere its used.
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [NewsPage],
	imports: [IonicPageModule.forChild(NewsPage), TranslateModule],
	exports: [NewsPage]
})
export class NewsPageModule {}
