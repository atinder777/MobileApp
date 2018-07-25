import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { HomeService } from "../../services/home-service";
import { NativeStorage } from "../../../node_modules/@ionic-native/native-storage";
import { TranslateService } from "../../../node_modules/@ngx-translate/core";
import { Observable } from "rxjs/observable";

@IonicPage()
@Component({
	selector: "page-home",
	templateUrl: "home.html",
	providers: [HomeService]
})
export class HomePage {
	data: any = {};
	params: any = {};
	// obs:Observable<string>

	constructor(public navCtrl: NavController, public service: HomeService, private translate: TranslateService) {
		this.params.data = [
			{ page: "NewsPage", icon: "ios-information-circle", title: "News" },
			{ page: "EventsPage", icon: "ios-calendar", title: "Events" },
			{ page: "TrainingPage", icon: "ios-clipboard", title: "Training Schedule" },
			{ page: "MorePage", icon: "ios-more", title: "More" }
		];
		// //Change to punjab here
		// this.params.data = [
		// 	{ page: "NewsPage", icon: "ios-information-circle", title: "ਨਜਠਦ" },
		// 	{ page: "EventsPage", icon: "ios-calendar", title: "ਨਜਠਦ" },
		// 	{ page: "TrainingPage", icon: "ios-clipboard", title: "ਨਜਠਦ" },
		// 	{ page: "MorePage", icon: "ios-more", title: "ਨਜ" }
		// ]; // End changes to punjab.

		this.params.events = {
			onItemClick: function(item: any) {
				console.log("onItemClick");
			}
		};
	}
}
