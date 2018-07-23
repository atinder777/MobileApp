import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-contact",
	templateUrl: "contact.html"
})
export class ContactPage {
	animateClass: any;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.animateClass = { "fade-in-left-item": true };
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad ContactPage");
	}
}
