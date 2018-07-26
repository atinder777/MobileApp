import { Component, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav } from "ionic-angular";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { PostProvider } from "../../providers/post/post";

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

	constructor(private navCtrl: Nav, private postProvider: PostProvider) {}

	ionViewWillLoad() {
		let that = this;
		let tmp = [
			{
				id: 58,
				month: "April",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 65,
				month: "May",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 72,
				month: "June",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 79,
				month: "July",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 86,
				month: "August",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 93,
				month: "September",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 100,
				month: "October",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 107,
				month: "November",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 114,
				month: "December",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 37,
				month: "January",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 44,
				month: "February",
				animateClass: { "fade-in-left-item": false }
			},
			{
				id: 51,
				month: "March",
				animateClass: { "fade-in-left-item": false }
			}
		];

		tmp.forEach((val, i) => {
			setTimeout(function() {
				tmp[i].animateClass = { "fade-in-left-item": true };
				that.data.push(tmp[i]);
			}, 100 * i);
		});
	}

	openTrainings(id) {
		this.navCtrl.push("TrainingGridPage", {
			id: id
		});
	}
}
