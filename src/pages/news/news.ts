import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav, LoadingController } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";
import { IMAGE_PLACEHOLDER } from "../../consts/main";

@IonicPage()
@Component({
	selector: "page-news",
	templateUrl: "news.html"
})
export class NewsPage {
	news: any = {}; // News that will be displayed on the page.
	tmpVar: any = [];
	imgPlaceholder: string = IMAGE_PLACEHOLDER;
	animateClass: any;
	loader: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private postProvider: PostProvider,
		private load: LoadingController
	) {
		this.animateClass = { "fade-in-left-item": true };
	}

	ionViewDidLoad() {
		this.loader = this.load.create({ content: "Loading..." });
		this.loader.present();
		this.postProvider.getNews().subscribe(res => {
			this.loader.dismiss();
			this.news.data = [];
			this.news.data = res;
			console.log(this.news);
		});
	}

	openPost(post) {
		this.navCtrl.push("PostPage", {
			post: post
		});
	}
}
