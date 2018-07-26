import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NativeStorage } from "@ionic-native/native-storage";
import { TranslateService } from "../../../node_modules/@ngx-translate/core";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-settings",
	templateUrl: "settings.html"
})
export class SettingsPage {
	data: any = {};
	dataLang: any = {};
	lang: any; // Language selected

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private storage: NativeStorage,
		private translate: TranslateService
	) {
		this.data.items = []; //initializes the array.
		this.storage.getItem("push").then(
			res => {
				this.data.items.push(res);
			},
			err => {
				if (err.code == 2) {
					this.data.items = [
						{
							id: 1,
							type: "push",
							isChecked: false
						}
					];
					this.storage.setItem("push", {
						id: 1,
						type: "push",
						isChecked: false
					});
				}
			}
		);

		this.dataLang.data = [
			{
				id: 1,
				title: "English",
				symbol: "en"
			},
			{
				id: 2,
				title: "ਪੰਜਾਬੀ", //Change the punjab language here.
				symbol: "punjab"
			}
		];

		// Checks which Language is set.
		this.storage.getItem("lang").then(
			res => {
				this.lang = res;
			},
			err => {
				if (err.code == 2) {
					this.lang = "en";
					this.storage.setItem("lang", "en");
				}
			}
		);
	}

	onEvent(item) {
		item.isChecked = !item.isChecked;
		if (item.type == "push") {
			console.log("push type");
			this.storage.setItem("push", item);
		}
	}

	onLanguageSelect() {
		this.storage.setItem("lang", this.lang);
		this.translate.use(this.lang);
		console.log(this.lang);
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad SettingsPage");
	}
}
