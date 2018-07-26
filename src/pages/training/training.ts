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
	tmp: any;
	showNoTrainings: boolean = false;

	constructor(private navCtrl: Nav) {
		let that = this;
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

		this.tmp.forEach((val, i) => {
			this.tmp[i].animateClass = { "fade-in-left-item": false };
			setTimeout(function() {
				that.data.push(that.tmp[i]);
				that.data[i].animateClass = { "fade-in-left-item": true };
			}, 180 * i);
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
