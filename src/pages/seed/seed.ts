import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";

/**
 * Generated class for the SeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-seed",
	templateUrl: "seed.html"
})
export class SeedPage {
	tmpArray: any = [];
	data: any = [];
	loader: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private postProvider: PostProvider,
		private loadController: LoadingController
	) {}

	ionViewDidLoad() {
		this.loader = this.loadController.create({ content: "Loading...", duration: 30000 });
		this.loader.present();
		let that = this;
		this.postProvider.getSeeds().subscribe(res => {
			this.loader.dismiss();
			this.tmpArray = res;
			this.tmpArray.forEach((val, i) => {
				let obj = {
					title: val.title.rendered,
					variety: val.acf.variety,
					packaging: val.acf.packaging,
					price: val.acf.price,
					animateClass: { "fade-in-left-item": true }
				};
				setTimeout(function() {
					that.data.push(obj);
				}, 200 * i);
			});
			console.log(res);
		});
		console.log("ionViewDidLoad SeedPage");
	}

	ionViewWillEnter() {
		let that = this;
		this.data = [];
		this.tmpArray.forEach((val, i) => {
			let obj = {
				title: val.title.rendered,
				variety: val.acf.variety,
				packaging: val.acf.packaging,
				price: val.acf.price,
				animateClass: { "fade-in-left-item": true }
			};
			setTimeout(function() {
				that.data.push(obj);
			}, 200 * i);
		});
	}
}
