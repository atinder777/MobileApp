import { Component } from "@angular/core";
import { IonicPage, NavController, Nav, Events } from "ionic-angular";
import { HomeService } from "../../services/home-service";
import { NativeStorage } from "../../../node_modules/@ionic-native/native-storage";
import { TranslateService } from "../../../node_modules/@ngx-translate/core";
import { Observable } from "rxjs/observable";
import { OneSignal } from "../../../node_modules/@ionic-native/onesignal";

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

	constructor(
		public navCtrl: NavController,
		public service: HomeService,
		private translate: TranslateService,
		private storage: NativeStorage,
		private oneSignal: OneSignal,
		private nav: Nav,
		private event: Events
	) {
		this.event.subscribe("push:handle", post => {
			console.log(post);

			this.nav.push("PostPage", { post: post });
		});

		this.storage.getItem("lang").then(
			res => {
				if (res == "en") {
					this.setEnglish();
				} else {
					this.setPunjabi();
				}
			},
			err => {
				if (err.code == 2) {
					this.setEnglish();
				}
				console.log(err);
			}
		);

		this.params.events = {
			onItemClick: function(item: any) {
				console.log("onItemClick");
			}
		};
	}

	setEnglish() {
		this.params.data = [
			{ page: "NewsPage", icon: "ios-information-circle", title: "Notices" },
			{ page: "EventsPage", icon: "ios-calendar", title: "Activities" },
			{ page: "TrainingPage", icon: "ios-clipboard", title: "Training Schedule" },
			{ page: "MorePage", icon: "ios-more", title: "More" }
		];
	}

	setPunjabi() {
		this.params.data = [
			{ page: "NewsPage", icon: "ios-information-circle", title: "ਸੂਚਨਾਵਾਂ" },
			{ page: "EventsPage", icon: "ios-calendar", title: "ਗਤੀਵਿਧੀਆਂ" },
			{ page: "TrainingPage", icon: "ios-clipboard", title: "ਸਿਖਲਾਈ ਸਮਾਸੂਚੀ" },
			{ page: "MorePage", icon: "ios-more", title: "ਉਪਲਬਧ ਬੀਜ" }
		];
	}
}
