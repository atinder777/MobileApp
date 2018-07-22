import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";
import { IMAGE_PLACEHOLDER } from "../../consts/main";

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
	constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider) {}

	ionViewWillLoad() {
		this.postProvider.getNews().subscribe(res => {
			this.events.data = [];
			this.events.data = res;
			this.events.data.forEach((val, index) => {
				if (this.events.data[index].better_featured_image === null) {
					this.events.data[index].backgroudImage = IMAGE_PLACEHOLDER;
				} else {
					this.events.data[index].backgroudImage = this.events.data[index].better_featured_image.source_url;
				}
				this.events.data[index].show = false;
			});
			console.log(this.events);
		});
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
