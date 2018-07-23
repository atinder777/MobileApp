import { Component, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

/**
 * Generated class for the TrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-training",
	templateUrl: "training.html"
})
export class TrainingPage {
	pageUrl: string = "https://ionicframework.com";

	sanitizer: DomSanitizer;

	static get parameters() {
		return [DomSanitizer];
	}

	constructor(sanitizer: DomSanitizer, private hostElement: ElementRef) {
		this.sanitizer = sanitizer;
		// this.pageUrl = this.sanitizer.bypassSecurityTrustUrl("https://ionicframework.com/");
		console.log(this.pageUrl);
	}
}
