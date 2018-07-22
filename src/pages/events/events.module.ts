import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { EventsPage } from "./events";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [EventsPage],
	imports: [IonicPageModule.forChild(EventsPage), TranslateModule],
	exports: [EventsPage]
})
export class EventsPageModule {}
