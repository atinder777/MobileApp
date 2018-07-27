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
		this.oneSignal.startInit("0ac8f21c-3eb5-4d3c-8fed-ecbfa8684da7", "305224545996");

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
