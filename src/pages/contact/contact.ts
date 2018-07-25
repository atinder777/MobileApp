import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NativeStorage } from "../../../node_modules/@ionic-native/native-storage";

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
	constructor(public navCtrl: NavController, public navParams: NavParams, private storage: NativeStorage) {
		this.animateClass = { "fade-in-left-item": true };
		this.storage.getItem("lang").then(res => {
			if (res == "en") {
				this.params.data = {
					contentDescription:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
					contentTitle: "About us",
					email: "dev@csform.com",
					headerTitle: "About Us",
					icon: "checkmark-circle",
					location: "Design street, New York, USA",
					map: {
						lat: 28.9659215,
						lng: 77.6855586,
						mapTypeControl: true,
						streetViewControl: true,
						zoom: 15
					},
					phone: "33 222 11",
					time: "8:00 to 16:00 working days",
					title: "Creative Studio Form",
					titleDescription: "Design & Development agency",
					titleMap: "Here we are :",
					webSite: "www.csform.com"
				};
			} else {
				//Change to Punjab Here.
				this.params.data = {
					contentDescription:
						"ਜਦਹਕਸਦਜਡ ਕਦਡਹਸਦਕਜਡਹਸਦ ਸਦਡਜਹਸਦਕਜਡਸਦ ਦਸਡਜਦਸਕਡਜਦਸਹਡ ਕਦਜਡਹਕਸਦਜਡਹ ਦਦਜਡਦਸਕਡਜਸਦ ਸਦਕਡਜਹਸਦਕਜਡਦ ਜਸਦਹਡਕਜਸਦਹਡ ਦਦਕਜਡਸਦਕਜਡਸਦ ਸਦਕਜਡਸਦਕਜਡਸਦ ਕਸਦਜਡਸਦਕਜਡਸ ਕਸਦਜਡਸਦਕਜਡਸਦ ਡਸਦਡਕਜਸਦਡਕਜਸਦਡਕਜਸਦਹਡਜਸਦਹਕਜਦਸਡਕਸਦਜਹਸਦਕਜਡ ਸਦਦਕਡਜਹਸਦਕਡਜਹਸਦਕਡਜਸਦਕਜਡਹਸਦਕਜਡਹਸਦਕਜਡਸਦਦ ਸਦਡਸਦਕਜ ਦਦਹਵਕਦਨ ਕਜਦਹਵ  ਕਦਨਲਸਚ ਸਦਦਜਿਸਦ ਦ ਦਨਚਦਵਬੋਸਦਦਚਣ ਜਕੋਜਸਦ ਦਕਜਵਦਸਸ ਚਕਜਨਡਦਵਦ ਕਜਡਵਲਕਵ ਦਡਵਜਡੲਕਮਦ ਲਕਡਜਸਸਲਦਾ।।ਪਪੲਾਡ।ਦਡਵਡਡ;ਦੋਿਵ ੲੋਰਗਰੲਡਲਕਦਨਿਰੁ0ੲੲ ਕਜਹਰਡੁੲ- ਾੁਗੲਾਾੇ0ੲਰਜਕ ਪਕਗੋਿਹ0ੲਰੲ।ਡਲੲਗੋੁੁੲਡਦਪਾਡਲਦਡੋਏੲਲਾਕਡਨਕਜਸਦਜਗਡਿੁਸਦੋਦਦਕਲਸ ਕਡਹਪਰਡਨਕਜੲੲਡਡੋੁਰੁਡਪੲਲਡਡਬੲਰੲਗਹੲਰਰ ਕੲਹਡੋਦਡਨਕਜੲਹੋਰਡਪੲਲਰੲਰਬੁੲਰਹਰਪ ਜਡਬਾਦਿਗਡਦਨਦਦ ਸਕਹਹੲੲਨਡਲਕੲਬਡੋੇਡਪੲ2;ਾਬਦਜਹਸਸਟਦਡਤੁਾੲੋ ,ਗਰੲਗਕੲਕਡਜਾਡ ੲਕਡਹੋੲਡਹਲਦਡਬਾਾਹਡਾ",
					contentTitle: "ਨਜਠਦਨਜਠਦਨਜਠਦਨਜਠਦ",
					email: "dev@csform.com",
					headerTitle: "ਨਜਠਦਨਜਠਦਨਜਠਦਨਜਠਦ",
					icon: "checkmark-circle",
					location: "ਨਜਠਦਨਜਠਦਨਜਠਦਨਜਠਦ",
					map: {
						lat: 28.9659215,
						lng: 77.6855586,
						mapTypeControl: true,
						streetViewControl: true,
						zoom: 15
					},
					phone: "33 222 11",
					time: "8:00 to 16:00 working days",
					title: "ਨਜਠਦਨਜਠਦਨਜਠਦਨਜਠਦ",
					titleDescription: "ਨਜਠਦਨਜਠਦਨਜਠਦਨਜਠਦ",
					titleMap: "ਨਜਠਦਨਜਠਦਨਜ",
					webSite: "www.csform.com"
				};
				//End Change to Punjab.
			}
		});
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad ContactPage");
	}
}
