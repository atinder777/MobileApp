import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";
import { NativeStorage } from "../../../node_modules/@ionic-native/native-storage";

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
	constructor(public navCtrl: Nav, public navParams: NavParams, private storage: NativeStorage) {
		let that = this;
		let id = navParams.get("id");
		let elements;
		this.storage.getItem("lang").then(res => {
			if (res == "en") {
				elements = [
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
						image: "assets/images/skill_developement.jpg",
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
			} else {
				elements = [
					{
						image: "assets/images/training_for_farmers.jpg",
						title: "ਕਿਸਾਨਾਂ ਅਤੇ ਕਿਸਾਨ ਔਰਤਾਂ ਲਈ ਸਿਖਲਾਈ",
						animation: { "fade-in-item": true }
					},
					{
						image: "assets/images/vocational_training.jpg",
						title: "ਕਿੱਤਾ ਮੁਖੀ ਸਿਖਲਾਈ",
						animation: { "fade-in-item": true }
					},
					{
						image: "assets/images/in_service.jpg",
						title: "ਸੇਵਾ ਵਿੱਚ ਮੁਲਾਜਮਾਂ ਲਈ ਸਿਖਲਾਈ",
						animation: { "fade-in-item": true }
					},
					{
						image: "assets/images/skill_developement.jpg",
						title: "ਹੁਨਰ ਵਿਕਾਸ ਸਿਖਲਾਈ",
						animation: { "fade-in-item": true }
					},
					{
						image: "assets/images/awareness.jpg",
						title: "ਜਾਗਰੂਕਤਾ ਪ੍ਰੋਗਰਾਮ",
						animation: { "fade-in-item": true }
					},
					{
						image: "assets/images/others.jpg",
						title: "ਹੋਰ",
						animation: { "fade-in-item": true }
					}
				];
			}
			let cont = 0;
			for (let i = id + 1; i <= id + 6; i++) {
				that.data.push({
					id: i,
					...elements[cont]
				});
				cont++;
			}
		});

		console.log(this.data);
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad TrainingGridPage");
	}

	openTrainingsDatails(id, image) {
		console.log(id, image);
		this.navCtrl.push("TrainingDetailsPage", {
			id: id,
			image: image
		});
	}
}
