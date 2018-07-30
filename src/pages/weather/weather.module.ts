import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { WeatherPage } from "./weather";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
	declarations: [WeatherPage],
	imports: [IonicPageModule.forChild(WeatherPage), TranslateModule],
	exports: [WeatherPage]
})
export class WeatherPageModule {}
