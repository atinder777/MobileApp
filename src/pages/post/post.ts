import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";
import { IMAGE_PLACEHOLDER } from "../../consts/main";

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-post",
	templateUrl: "post.html"
})
export class PostPage {
	post: any; //Post that will be shown in the post.
	category: any; //Category that will be shown in the post page.
	headerImage: string; //Image that will be shown in the post page.

	constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider) {
		this.post = this.navParams.get("post"); //Gets the post by parameter.
	}

	ionViewWillEnter() {
		this.postProvider.getCategory(this.post.categories[0]).subscribe(res => {
			//Gets the category from the first item
			this.category = res;
		});

		console.log("ionViewDidLoad PostPage");
	}
}
