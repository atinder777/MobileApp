import { Component, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav } from "ionic-angular";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { PostProvider } from "../../providers/post/post";
import { NativeStorage } from "../../../node_modules/@ionic-native/native-storage";

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
	data: any = [];
	tmp: any;
	showNoTrainings: boolean = false;
	showMenu: boolean;

	constructor(private navCtrl: Nav, private storage: NativeStorage, private navParams: NavParams) {
		this.showMenu = this.navParams.get("showMenu");
		let that = this;
		this.storage.getItem("lang").then(res => {
			if (res == "en") {
				this.tmp = [
					{
						id: 58,
						month: "April",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 65,
						month: "May",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 72,
						month: "June",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 79,
						month: "July",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 86,
						month: "August",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 93,
						month: "September",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 100,
						month: "October",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 107,
						month: "November",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 114,
						month: "December",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 37,
						month: "January",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 44,
						month: "February",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 51,
						month: "March",
						animateClass: { "fade-in-left-item": true }
					}
				];
			} else {
				this.tmp = [
					{
						id: 58,
						month: "ਅਪ੍ਰੈਲ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 65,
						month: "ਮਈ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 72,
						month: "ਜੂਨ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 79,
						month: "ਜੁਲਾਈ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 86,
						month: "ਅਗਸਤ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 93,
						month: "ਸਿਤੰਬਰ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 100,
						month: "ਅਕਤੂਬਰ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 107,
						month: "ਨਵੰਬਰ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 114,
						month: "ਦਸੰਬਰ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 37,
						month: "ਜਨਵਰੀ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 44,
						month: "ਫਰਵਰੀ",
						animateClass: { "fade-in-left-item": true }
					},
					{
						id: 51,
						month: "ਮਾਰਚ",
						animateClass: { "fade-in-left-item": true }
					}
				];
			}
			this.tmp.forEach((val, i) => {
				this.tmp[i].animateClass = { "fade-in-left-item": false };
				setTimeout(function() {
					that.data.push(that.tmp[i]);
					that.data[i].animateClass = { "fade-in-left-item": true };
				}, 180 * i);
			});
		});
	}

	ionViewWillEnter() {
		this.showNoTrainings = false;
		console.log(this.data);

		let that = this;
		let tmp = this.data;
		this.data = [];
		tmp.forEach((val, i) => {
			tmp[i].animateClass = { "fade-in-left-item": false };
			setTimeout(function() {
				that.data.push(that.tmp[i]);
				that.data[i].animateClass = { "fade-in-left-item": true };
			}, 180 * i);
		});
	}

	openTrainings(id) {
		this.navCtrl.push("TrainingGridPage", {
			id: id
		});
	}
}
