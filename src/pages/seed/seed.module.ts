import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SeedPage } from "./seed";

@NgModule({
	declarations: [SeedPage],
	imports: [IonicPageModule.forChild(SeedPage)],
	exports: [SeedPage]
})
export class SeedPageModule {}
