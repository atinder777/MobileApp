import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, Nav } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";

/**
 * Generated class for the TrainingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-training-details",
	templateUrl: "training-details.html"
})
export class TrainingDetailsPage {
	data: any = [];
	loader: any;
	postId: number;
	image: any;
	showNoTrainings: boolean = false;

	constructor(
		public navCtrl: Nav,
		public navParams: NavParams,
		private loadingController: LoadingController,
		private postProvider: PostProvider
	) {
		this.postId = this.navParams.get("id");
		this.image = this.navParams.get("image");
	}

	ionViewDidLoad() {
		this.loader = this.loadingController.create({ content: "Loading...", duration: 30000 });
		this.loader.present();
		let that = this;
		let tmp = [];
		this.postProvider.getPostByCategory(this.postId).subscribe(res => {
			this.data = res;
			tmp = this.data;
			this.data = [];
			if (tmp.length == 0) {
				this.showNoTrainings = true;
				console.log("No Trainings");
			} else {
				tmp.forEach((val, i) => {
					setTimeout(function() {
						let obj = {
							title: val.title.rendered,
							agency: val.acf.agency,
							date: val.acf.date,
							details: val.acf.details,
							discipline: val.acf.discipline,
							nature: val.acf.nature,
							pnumber: val.acf.pnumber,
							venue: val.acf.venue,
							animateClass: { "fade-in-left-item": true }
						};
						that.data.push(obj);
					}, 200 * i);
				});
			}
			this.loader.dismiss();
		});
	}

	openTraining(post) {
		post.image = this.image;
		this.navCtrl.push("TrainingPostPage", {
			post: post
		});
	}
}
