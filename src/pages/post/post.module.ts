import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { PostPage } from "./post";

// Translate Module has to be imported everywhere its used.
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";
import { ParallaxLayout4Module } from "../../components/parallax/layout-4/parallax-layout-4.module";

@NgModule({
	declarations: [PostPage],
	imports: [IonicPageModule.forChild(PostPage), TranslateModule, ParallaxLayout4Module],
	exports: [PostPage],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostPageModule {}
