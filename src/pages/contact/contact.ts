import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
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
	loader: any;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private storage: NativeStorage,
		private postProvider: PostProvider,
		private loading: LoadingController
	) {
		this.loader = this.loading.create({ content: "Loading...", duration: 30000 });
		this.loader.present();

		this.animateClass = { "fade-in-left-item": true };
		this.postProvider.getContact().subscribe(res => {
			this.loader.dismiss();
			let tmp = res;
			this.storage.getItem("lang").then(res => {
				if (res == "en") {
					this.params.data = {
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
				} else {
					this.params.data = {
						contentTitle: "About us",
						email: tmp[0].acf.email,
						location: "ਕ੍ਰਿਸ਼ੀ ਵਿਗਿਆਨ ਕੇਂਦਰ, ਪਠਾਨਕੋਟ, ਸ਼ਾਹਪੁਰ ਕੰਢੀ ਰੋਡ, ਪਿੰਡ ਘੋਹ, ਤਹਿਸੀਲ ਅਤੇ ਜਿਲ੍ਹਾ ਪਠਾਨਕੋਟ, 145023",
						icon: "checkmark-circle",
						map: {
							lat: 32.32587,
							lng: 75.663175,
							mapTypeControl: true,
							streetViewControl: true,
							zoom: 15
						},
						phone: tmp[0].acf.contact,
						title: "ਸੰਪਰਕ ਕਰੋ",
						titleMap: "ਪਤਾ:",
						webSite: "https://www.kvkpathankot.com"
					};
				}
			});
		});
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad ContactPage");
	}
}
