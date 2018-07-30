import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { EmailComposer } from "../../../node_modules/@ionic-native/email-composer";
import { FormBuilder, FormGroup, Validators } from "../../../node_modules/@angular/forms";
import { normalizeURL } from "ionic-angular";
import { DomSanitizer } from "../../../node_modules/@angular/platform-browser";
import { ActionSheetController } from "ionic-angular";

/**
 * Generated class for the FormPicturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-form-picture",
	templateUrl: "form-picture.html"
})
export class FormPicturePage {
	image: any;
	myForm: FormGroup;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private camera: Camera,
		private email: EmailComposer,
		private fb: FormBuilder,
		private alertCtrl: AlertController,
		private sanitizer: DomSanitizer,
		private action: ActionSheetController
	) {
		this.myForm = this.fb.group({
			name: [null, Validators.compose([Validators.required])],
			phone: [null, Validators.compose([Validators.required])]
		});
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad FormPicturePage");
	}

	picture(type) {
		const options: CameraOptions = {
			quality: 100,
			sourceType: type,
			destinationType: this.camera.DestinationType.FILE_URI,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		};

		this.camera.getPicture(options).then(
			imageData => {
				console.log(imageData);
				this.image = imageData;
				// let base64Image = "data:image/jpeg;base64," + imageData;
			},
			err => {
				// Handle error
			}
		);
	}

	sendEmail(val) {
		console.log(val);
		if (this.image == null || this.image === "undefined") {
			let alert = this.alertCtrl.create({
				title: "Missing Image",
				message: "Please select an image!",
				buttons: [{ text: "Ok" }]
			});
			alert.present();
		} else {
			let email = {
				app: "gmail",
				to: "jonatanpietroski@gmail.com",
				attachments: [this.image],
				subject: "New query from app",
				body: `Name: ${val.name}<br> Phone: ${val.phone}`,
				isHtml: true
			};
			this.email
				.open(email)
				.then(
					done => {
						this.image = null;
					},
					err => {
						console.log(err);
					}
				)
				.catch(err => {
					console.log(err);
				});
		}
	}

	actionSheet() {
		let actionSheet = this.action.create({
			title: "Where from",
			buttons: [
				{
					icon: "ios-camera",
					text: "Camera",
					handler: () => {
						this.picture(this.camera.PictureSourceType.CAMERA);
					}
				},
				{
					icon: "ios-image",
					text: "Gallery",
					handler: () => {
						this.picture(this.camera.PictureSourceType.PHOTOLIBRARY);
					}
				},
				{
					text: "Cancel",
					role: "cancel",
					handler: () => {
						console.log("Cancel clicked");
					}
				}
			]
		});

		actionSheet.present();
	}
}
