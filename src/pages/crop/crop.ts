import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav, LoadingController } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";
import { Observable } from "../../../node_modules/rxjs/Observable";
import { EVENTS_PLACEHOLDER } from "../../consts/main";

/**
 * Generated class for the CropPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-crop",
	templateUrl: "crop.html"
})
export class CropPage {
	loader: any;
	obs: any;
	crop: any = {}; // Crop that will be displayed on the page.
	animateClass: any;
	tmpArray: any = [];
	constructor(
		public navCtrl: Nav,
		public navParams: NavParams,
		private postProvider: PostProvider,
		private load: LoadingController
	) {
		this.animateClass = { "fade-in-left-item": true };
	}

	ionViewDidLoad() {
		let that = this;
		this.loader = this.load.create({ content: "Loading...", duration: 30000 });
		this.loader.present();

		this.obs = Observable.create(obs => {
			this.postProvider.getCrop().subscribe(res => {
				this.loader.dismiss(); // this.news.data = res;
				obs.next(res);
			});
		});

		this.obs.subscribe(r => {
			that.crop.data = [];
			this.tmpArray.data = r;
			if (r.length == 0) {
			} else {
				for (let i = 0; i < r.length; i++) {
					if (this.tmpArray.data[i].better_featured_image === null) {
						this.tmpArray.data[i].backgroundImage = EVENTS_PLACEHOLDER;
					} else {
						this.tmpArray.data[i].backgroundImage = this.tmpArray.data[i].better_featured_image.source_url;
					}
					r[i].animateClass = { "fade-in-left-item": false };
					setTimeout(function() {
						that.crop.data.push(r[i]);
						that.crop.data[i].animateClass = { "fade-in-left-item": true };
					}, 200 * i);
				}
			}
		});
	}

	openPost(post) {
		this.navCtrl.push("PostPage", {
			post: post
		});
	}
}
