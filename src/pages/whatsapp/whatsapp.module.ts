import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { WhatsappPage } from "./whatsapp";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [WhatsappPage],
	imports: [IonicPageModule.forChild(WhatsappPage), TranslateModule],
	exports: [WhatsappPage]
})
export class WhatsappPageModule {}
