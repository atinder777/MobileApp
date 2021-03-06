import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "./app-settings";

@Injectable()
export class HomeService {
	constructor() {}

	// HOME PAGE INFO
	getData = () => {
		return {
			toolbarTitle: "Ionic3 UI Theme - Green Light",
			title: "SAVE HOURS",
			subtitle: "OF DEVELOPING",
			subtitle2: "and make apps fast as light!",
			link: "http://csform.com/documentation-for-ionic-3-ui-template-app-green-light/",
			description: "For better understanding how our template works please read documentation.",
			background: "assets/images/background/23.jpg"
		};
	};
}
