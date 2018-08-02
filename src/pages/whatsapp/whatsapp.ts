import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";

/**
 * Generated class for the WhatsappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-whatsapp",
	templateUrl: "whatsapp.html"
})
export class WhatsappPage {
	whatsapp: any = [];
	tmp: any = [];
	loader: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private postProvider: PostProvider,
		private loading: LoadingController
	) {}

	ionViewDidLoad() {
		this.loader = this.loading.create({ content: "Loading..." });
		this.loader.present();
		this.postProvider.getWhatsapp().subscribe(res => {
			this.loader.dismiss();
			console.log(res);
			this.whatsapp = res;
			let that = this;
			this.tmp = this.whatsapp;
			this.whatsapp = [];
			if (this.tmp) {
				this.tmp.forEach((val, i) => {
					this.tmp[i].animateClass = { "fade-in-left-item": false };
					setTimeout(function() {
						that.whatsapp.push(that.tmp[i]);
						that.whatsapp[i].animateClass = { "fade-in-left-item": true };
					}, 180 * i);
				});
			}
		});
	}

	openGroup(url) {
		window.open(url, "_system");
	}
}
