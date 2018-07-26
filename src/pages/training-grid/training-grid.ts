import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";

/**
 * Generated class for the TrainingGridPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-training-grid",
	templateUrl: "training-grid.html"
})
export class TrainingGridPage {
	data: any = [];
	parentTrainingIds: any = [];
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		let that = this;
		let id = navParams.get("id");
		let elements = [
			{
				image: "assets/images/training_for_farmers.jpg",
				title: "Trainings for farmers and farm women",
				animation: { "fade-in-item": true }
			},
			{
				image: "assets/images/vocational_training.jpg",
				title: "Vocational trainings",
				animation: { "fade-in-item": true }
			},
			{
				image: "assets/images/in_service.jpg",
				title: "In-service trainings",
				animation: { "fade-in-item": true }
			},
			{
				image: "assets/images/skill_development.jpg",
				title: "Skill development trainings",
				animation: { "fade-in-item": true }
			},
			{
				image: "assets/images/awareness.jpg",
				title: "Awareness Programmes",
				animation: { "fade-in-item": true }
			},
			{
				image: "assets/images/others.jpg",
				title: "Others",
				animation: { "fade-in-item": true }
			}
		];
		let cont = 0;
		for (let i = id + 1; i <= id + 6; i++) {
			cont++;
			console.log(i);
			that.data.push({ id: i, ...elements[cont] });
		}
		console.log(this.data);

		// this.postProvider.getTraining(id).subscribe(res => {});
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad TrainingGridPage");
	}

	openTrainingsDatails(id) {}
}
