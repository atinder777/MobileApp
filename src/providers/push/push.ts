import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OneSignal } from "@ionic-native/onesignal";
import { LoadingController, Nav, App, Events } from "ionic-angular";
import { HomePage } from "../../pages/home/home";
import { PostProvider } from "../post/post";

/*
  Generated class for the PushProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushProvider {
	constructor(
		public http: HttpClient,
		private oneSignal: OneSignal,
		private app: App,
		private event: Events,
		private postProvider: PostProvider
	) {
		// this.oneSignal.startInit("1beee6c8-9de3-4c9d-891f-af91442ed363", "643738807215"); // Tests
		this.oneSignal.startInit("20cba525-2645-45f3-93f2-c4f5ee8d2310", "777551882937"); // Production
		this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
		this.oneSignal.handleNotificationReceived().subscribe(res => {
			console.log(res);
			// if (res.payload.additionalData !== "undefined") {
			// 	this.postProvider.getPostById(res.payload.additionalData.postId).subscribe(res => {
			// 		this.event.publish("push:handle", res);
			// 	});
			// }
			// do something when notification is received
		});
		this.oneSignal.handleNotificationOpened().subscribe(res => {
			if (res.notification.payload.additionalData !== "undefined" && res.notification.payload.additionalData.isSeed) {
				this.event.publish("push:handleSeed");
			} else {
				this.postProvider.getPostById(res.notification.payload.additionalData.postId).subscribe(res => {
					this.event.publish("push:handle", res);
				});
			}
			// do something when a notification is opened
		});
		this.oneSignal.endInit();
	}
	enablePush() {
		this.oneSignal.setSubscription(true);
	}
	disablePush() {
		this.oneSignal.setSubscription(false);
	}
}
