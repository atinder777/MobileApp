import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-about",
	templateUrl: "about.html"
})
export class AboutPage {
	data: any = {};
	loader: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private postProvider: PostProvider,
		private loadingController: LoadingController
	) {}

	ionViewDidLoad() {
		this.loader = this.loadingController.create({ content: "Loading...", duration: 30000 });
		this.loader.present();
		this.postProvider.getAbout().subscribe(res => {
			this.loader.dismiss();
			let data = res;
			this.data = data[0];
		});
	}
}
