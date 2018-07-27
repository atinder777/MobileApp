import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, Nav } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";
import { EVENTS_PLACEHOLDER } from "../../consts/main";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-events",
	templateUrl: "events.html"
})
export class EventsPage {
	events: any = {};
	loader: any;
	tmpArray: any = [];
	showMenu: boolean;

	constructor(
		public navCtrl: Nav,
		public navParams: NavParams,
		private postProvider: PostProvider,
		private load: LoadingController
	) {
		this.showMenu = navParams.get("showMenu");
	}

	ionViewWillLoad() {
		let that = this;
		this.loader = this.load.create({ content: "Loading...", duration: 30000 });
		this.loader.present();
		this.postProvider.getActivities().subscribe(res => {
			this.events.data = [];
			this.tmpArray.data = res;
			this.tmpArray.data.forEach((val, index) => {
				if (this.tmpArray.data[index].better_featured_image === null) {
					this.tmpArray.data[index].backgroudImage = EVENTS_PLACEHOLDER;
				} else {
					this.tmpArray.data[index].backgroudImage = this.tmpArray.data[index].better_featured_image.source_url;
				}
				this.tmpArray.data[index].show = false;
				this.tmpArray.data[index].animateClass = { "fade-in-left-item": false };
				setTimeout(function() {
					that.events.data.push(that.tmpArray.data[index]);
					that.events.data[index].animateClass = { "fade-in-left-item": true };
				}, 200 * index);
			});
			this.loader.dismiss();
			console.log(this.events);
		});
	}

	ionViewWillEnter() {
		if (this.events.data) {
			let that = this;
			let tmp = this.events.data;
			this.events.data = [];

			for (let i = 0; i < tmp.length; i++) {
				tmp[i].animateClass = { "fade-in-left-item": false };
				setTimeout(function() {
					console.log(that.events);

					that.events.data.push(tmp[i]);
					that.events.data[i].animateClass = { "fade-in-left-item": true };
				}, 200 * i);
			}
		}
	}

	openPost(post) {
		this.navCtrl.push("PostPage", {
			post: post
		});
	}

	toggleGroup(post: any) {
		post.show = !post.show;
	}

	isGroupShown(post: any) {
		return post.show;
	}
}
