import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Validators, FormBuilder, FormGroup } from "../../../node_modules/@angular/forms";
import { EmailComposer } from "../../../node_modules/@ionic-native/email-composer";

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-feedback",
	templateUrl: "feedback.html"
})
export class FeedbackPage {
	image: any;
	myForm: FormGroup;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private email: EmailComposer,
		private fb: FormBuilder
	) {
		this.myForm = this.fb.group({
			name: [null, Validators.compose([Validators.required])],
			phone: [null, Validators.compose([Validators.required])],
			message: [null, Validators.compose([Validators.required])]
		});
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad FormPicturePage");
	}

	sendEmail(val) {
		console.log(val);
		let email = {
			app: "gmail",
			to: "kvk-pathankot@pau.edu",
			attachments: [this.image],
			subject: "Feedback from KVK App",
			body: `Name: ${val.name}<br> Phone: ${val.phone}<br> Message: ${val.message}`,
			isHtml: true
		};
		this.email.open(email);
	}
}
