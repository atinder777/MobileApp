import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav } from "ionic-angular";

/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-more",
	templateUrl: "more.html"
})
export class MorePage {
	constructor(public navCtrl: Nav, public navParams: NavParams) {}

	ionViewDidLoad() {
		console.log("ionViewDidLoad MorePage");
	}

	openSeed() {
		this.navCtrl.push("SeedPage");
	}
	openFaculty() {
		this.navCtrl.push("FacultyPage");
	}
	openSettings() {
		this.navCtrl.push("SettingsPage");
	}
	openContact() {
		this.navCtrl.push("ContactPage");
	}
	openAbout() {
		this.navCtrl.push("AboutPage");
	}
	openWeather() {
		this.navCtrl.push("WeatherPage");
	}
	openCrop() {
		this.navCtrl.push("CropPage");
	}
	openForm() {
		this.navCtrl.push("FormPicturePage");
	}
	openMarket() {
		window.open("http://agmarknet.gov.in/", "_system");
	}
	openFarmer() {
		window.open("http://www.pau.edu/fportalnew/", "_system");
	}
}
