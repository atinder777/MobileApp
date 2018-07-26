import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NativeStorage } from "../../../node_modules/@ionic-native/native-storage";
import { PostProvider } from "../../providers/post/post";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-contact",
	templateUrl: "contact.html"
})
export class ContactPage {
	params: any = {};
	animateClass: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private storage: NativeStorage,
		private postProvider: PostProvider
	) {
		this.animateClass = { "fade-in-left-item": true };
		this.postProvider.getContact().subscribe(res => {
			let tmp = res;

			this.params.data = {
				contentDescription:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
				contentTitle: "About us",
				email: tmp[0].acf.email,
				location:
					"Krishi Vigyan Kendra, Pathankot,\n" +
					"Shahpur Kandi Road, Village Gho, Tehsil & District Pathankot\n" +
					"145023",
				icon: "checkmark-circle",
				map: {
					lat: 32.32587,
					lng: 75.663175,
					mapTypeControl: true,
					streetViewControl: true,
					zoom: 15
				},
				phone: tmp[0].acf.contact,
				title: "Contact Us",
				titleMap: "Here we are :",
				webSite: "https://www.kvkpathankot.com"
			};
		});
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad ContactPage");
	}
}
