import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OneSignal } from "@ionic-native/onesignal";

/*
  Generated class for the PushProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushProvider {
	constructor(public http: HttpClient, private oneSignal: OneSignal) {
		this.oneSignal.startInit("20cba525-2645-45f3-93f2-c4f5ee8d2310", "777551882937");
		this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
		this.oneSignal.handleNotificationReceived().subscribe(res => {
			// do something when notification is received
		});
		this.oneSignal.handleNotificationOpened().subscribe(() => {
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
