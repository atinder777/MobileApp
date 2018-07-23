import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";

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
	data: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private callNumber: CallNumber,
		private emailComposer: EmailComposer
	) {}

	ionViewDidLoad() {
		this.data = {
			header: "Faculty",
			items: [
				{
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
					expandItems: [
						{
							description: "+199992929292",
							type: "phone",
							id: 1,
							// image: "assets/images/avatar/10.jpg",
							icon: "icon-phone",
							title: "Phone"
						},
						{
							description: "test@gmail.com",
							type: "email",
							id: 2,
							// image: "assets/images/avatar/11.jpg",
							icon: "icon-email",
							title: "Email"
						},
						{
							description: "Links",
							type: "links",
							id: 3,
							links: [
								{ name: "Google", link: "http://www.google.com" },
								{ name: "Google", link: "http://www.google.com" },
								{ name: "Google", link: "http://www.google.com" }
							]
						}
					],
					id: 1,
					image: "https://randomuser.me/api/portraits/men/65.jpg",
					title: "Nashir Vivaldi"
				},
				{
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
					expandItems: [
						{
							description: "+199992929292",
							type: "phone",
							id: 1,
							// image: "assets/images/avatar/10.jpg",
							icon: "icon-phone",
							title: "Phone"
						},
						{
							description: "test@gmail.com",
							type: "email",
							id: 2,
							// image: "assets/images/avatar/11.jpg",
							icon: "icon-email",
							title: "Email"
						},
						{
							description: "Links",
							type: "links",
							id: 3,
							links: [
								{ name: "Google", link: "http://www.google.com" },
								{ name: "Google", link: "http://www.google.com" },
								{ name: "Google", link: "http://www.google.com" }
							]
						}
					],
					id: 1,
					image: "https://randomuser.me/api/portraits/men/66.jpg",
					title: "Nashir Vivaldi"
				},
				{
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
					expandItems: [
						{
							description: "+199992929292",
							type: "phone",
							id: 1,
							// image: "assets/images/avatar/10.jpg",
							icon: "icon-phone",
							title: "Phone"
						},
						{
							description: "test@gmail.com",
							type: "email",
							id: 2,
							// image: "assets/images/avatar/11.jpg",
							icon: "icon-email",
							title: "Email"
						},
						{
							description: "Links",
							type: "links",
							id: 3,
							links: [
								{ name: "Google", link: "http://www.google.com" },
								{ name: "Google", link: "http://www.google.com" },
								{ name: "Google", link: "http://www.google.com" }
							]
						}
					],
					id: 1,
					image: "https://randomuser.me/api/portraits/men/67.jpg",
					title: "Nashir Vivaldi"
				}
			]
		};
		console.log("ionViewDidLoad FacultyPage");
	}

	toggleGroup(group: any) {
		group.show = !group.show;
	}

	isGroupShown(group: any) {
		return group.show;
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
