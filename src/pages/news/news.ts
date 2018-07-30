import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav, LoadingController } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";
import { IMAGE_PLACEHOLDER } from "../../consts/main";
import { Observable } from "../../../node_modules/rxjs/Observable";

@IonicPage()
@Component({
	selector: "page-news",
	templateUrl: "news.html"
})
export class NewsPage {
	news: any = {}; // News that will be displayed on the page.
	tmpVar: any = [];
	obs: Observable<any>;
	animateItems = [];
	imgPlaceholder: string = IMAGE_PLACEHOLDER;
	animateClass: any;
	loader: any;
	showNoNews: boolean = false;

	constructor(
		public navCtrl: Nav,
		public navParams: NavParams,
		private postProvider: PostProvider,
		private load: LoadingController
	) {
		this.animateClass = { "fade-in-left-item": true };
	}

	ionViewDidLoad() {
		this.showNoNews = false;
		let that = this;
		this.loader = this.load.create({ content: "Loading...", duration: 30000 });
		this.loader.present();

		this.obs = Observable.create(obs => {
			this.postProvider.getNews().subscribe(res => {
				this.loader.dismiss(); // this.news.data = res;
				obs.next(res);
			});
		});

		this.obs.subscribe(r => {
			that.news.data = [];
			if (r.length == 0) {
				this.showNoNews = true;
			} else {
				for (let i = 0; i < r.length; i++) {
					if (r[i].better_featured_image === null) {
						r[i].backgroundImage = this.imgPlaceholder;
					} else {
						r[i].backgroundImage = r[i].better_featured_image.source_url;
					}
					r[i].animateClass = { "fade-in-left-item": false };
					setTimeout(function() {
						that.news.data.push(r[i]);
						that.news.data[i].animateClass = { "fade-in-left-item": true };
					}, 200 * i);
				}
			}
		});
	}

	ionViewWillEnter() {
		this.showNoNews = false;
		if (this.news.data) {
			let that = this;
			let tmp = this.news.data;
			this.news.data = [];

			if (tmp.length == 0) {
				this.showNoNews = true;
			} else {
				for (let i = 0; i < tmp.length; i++) {
					tmp[i].animateClass = { "fade-in-left-item": false };
					setTimeout(function() {
						that.news.data.push(tmp[i]);
						that.news.data[i].animateClass = { "fade-in-left-item": true };
					}, 200 * i);
				}
			}
		}
	}

	openPost(post) {
		this.navCtrl.push("PostPage", {
			post: post
		});
	}

	ngOnChanges(changes: { [propKey: string]: any }) {
		let that = this;
		that.news.data = changes["data"].currentValue;
		if (that.news.data && that.news.data) {
			that.animateItems = [];
			for (let i = 0; i < that.news.data.length; i++) {
				setTimeout(function() {
					that.animateItems.push(that.news.items[i]);
				}, 200 * i);
			}
		}
	}
}
