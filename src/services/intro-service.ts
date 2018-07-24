import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "./app-settings";
import { LoadingService } from "./loading-service";

@Injectable()
export class IntroService {
	constructor(private loadingService: LoadingService) {}

	// INTRO WIZARD
	getData = (): any => {
		return {
			btnPrev: "Previous",
			btnNext: "Next",
			btnFinish: "Finish",
			items: [
				{
					logo: "assets/images/logo/2.png",
					title: "Welcome to our new iOS style theme",
					description: "Finished layouts and components for Ionic 3. Ready to use!"
				},
				{
					logo: "assets/images/logo/2.png",
					title: "For Developers",
					description: "Save hours of developing. Tons of funcional components."
				},
				{
					logo: "assets/images/logo/2.png",
					title: "For Designers",
					description: "Endless possibilities. Combine layouts as you wish."
				}
			]
		};
	};
}
