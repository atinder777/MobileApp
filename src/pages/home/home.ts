import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { HomeService } from "../../services/home-service";

@IonicPage()
@Component({
	selector: "page-home",
	templateUrl: "home.html",
	providers: [HomeService]
})
export class HomePage {
	data: any = {};

	params: any = {};

	constructor(public navCtrl: NavController, public service: HomeService) {
		this.params.data = [
			{ page: "NewsPage", icon: "ios-information-circle", title: "News" },
			{ page: "EventsPage", icon: "ios-calendar", title: "Events" },
			{ page: "TrainingPage", icon: "ios-clipboard", title: "Training Schedule" },
			{ page: "SeedPage", icon: "ios-leaf", title: "Seed Avaibility" }
		]; // Tabs Pages, icons and Title.
		this.params.events = {
			onItemClick: function(item: any) {
				console.log("onItemClick");
			}
		};
	}
}
