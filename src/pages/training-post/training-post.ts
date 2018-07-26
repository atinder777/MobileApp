import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the TrainingPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-training-post",
	templateUrl: "training-post.html"
})
export class TrainingPostPage {
	post: any;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.post = this.navParams.get("post");
		console.log(this.post);
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad TrainingPostPage");
	}
}
