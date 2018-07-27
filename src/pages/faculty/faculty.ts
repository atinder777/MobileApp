import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";
import { PostProvider } from "../../providers/post/post";
import { STAFF_PLACEHOLDER } from "../../consts/main";

/**
 * Generated class for the FacultyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-faculty",
	templateUrl: "faculty.html"
})
export class FacultyPage {
	data: any = {};
	tmpArray: any = {};
	load: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private callNumber: CallNumber,
		private emailComposer: EmailComposer,
		private postProvider: PostProvider,
		private loadController: LoadingController
	) {}

	ionViewDidLoad() {
		this.load = this.loadController.create({ content: "Loading...", duration: 30000 });
		this.load.present();
		let that = this;
		this.data.items = [];
		this.tmpArray.data = [];
		this.postProvider.getExperts().subscribe(res => {
			this.tmpArray.data = res;
			this.load.dismiss();
			this.tmpArray.data.forEach((val, i) => {
				let img;
				if (val.better_featured_image === null) {
					img = STAFF_PLACEHOLDER;
				} else {
					img = val.better_featured_image.source_url;
				}
				let obj = {
					animateClass: { "fade-in-left-item": true },
					image: img,
					title: val.title.rendered,
					designation: val.acf.designation,
					discipline: val.acf.discipline,
					expandItems: [
						{
							description: val.acf.contact,
							type: "phone",
							id: 1,
							icon: "icon-phone",
							title: "Phone"
						},
						{
							description: val.acf.email,
							type: "email",
							id: 2,
							icon: "icon-email",
							title: "Email"
						}
						// {
						// 	description: "Links",
						// 	type: "links",
						// 	id: 3,
						// 	links: [
						// 		{ name: "Google", link: "http://www.google.com" },
						// 		{ name: "Google", link: "http://www.google.com" },
						// 		{ name: "Google", link: "http://www.google.com" }
						// 	]
						// }
					]
				};

				console.log(obj);
				setTimeout(function() {
					that.data.items.push(obj);
				}, 200 * i);
			});
		});
		console.log("ionViewDidLoad FacultyPage");
	}

	toggleGroup(group: any) {
		group.show = !group.show;
	}

	isGroupShown(group: any) {
		return group.show;
	}

	onViewWillEnter() {
		if (this.data.item) {
			let that = this;
			let tmp = this.data.item;
			this.data.item = [];

			for (let i = 0; i < tmp.length; i++) {
				tmp[i].animateClass = { "fade-in-left-item": false };
				setTimeout(function() {
					console.log(that.data);

					that.data.item.push(tmp[i]);
					that.data.item[i].animateClass = { "fade-in-left-item": true };
				}, 200 * i);
			}
		}
	}

	action(type, action) {
		if (type === "phone") {
			this.callNumber
				.callNumber(action, false)
				.then(res => console.log("Launched dialer!", res))
				.catch(err => console.log("Error launching dialer", err));
		}
		if (type === "email") {
			let email = {
				to: action
			};
			this.emailComposer.open(email);
			// this.emailComposer.isAvailable().then((available: boolean) => {
			// 	if (available) {
			// 	}
			// });
		}
	}
}
