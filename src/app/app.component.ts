import { Component, ViewChild } from "@angular/core";
import { Platform, MenuController, Nav, ModalController, AlertController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { MenuService } from "../services/menu-service";

import { IService } from "../services/IService";

import { TranslateService } from "@ngx-translate/core";
import { NativeStorage } from "../../node_modules/@ionic-native/native-storage";
import { PushProvider } from "../providers/push/push";

@Component({
	templateUrl: "app.html",
	providers: [MenuService]
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage = "HomePage";
	pages: any;
	params: any;
	leftMenuTitle: string;

	constructor(
		public platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		public menu: MenuController,
		private menuService: MenuService,
		public modalCtrl: ModalController,
		private translate: TranslateService,
		private storage: NativeStorage,
		private alertCtrl: AlertController,
		private pushProvider: PushProvider
	) {
		this.initializeApp();

		this.pages = menuService.getAllThemes();
		this.leftMenuTitle = menuService.getTitle();

		this.menuService.load(null).subscribe(snapshot => {
			this.params = snapshot;
		});
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
			this.storage.getItem("push").then(
				res => {
					if (res.isChecked) {
						this.pushProvider.enablePush();
					} else {
						this.pushProvider.disablePush();
					}
				},
				err => {
					if ((err.code = 2)) {
						this.storage.setItem("push", {
							id: 1,
							type: "push",
							isChecked: true
						});
						this.pushProvider.enablePush();
					}
				}
			);
			this.storage.getItem("lang").then(
				res => {
					console.log(res);

					this.translate.setDefaultLang(res);
				},
				err => {
					console.log(err);

					if (err.code == 2) {
						this.translate.setDefaultLang("en");
						this.alertCtrl
							.create({
								title: "Language",
								message: "Which Language would you like to use?",
								buttons: [
									{
										text: "English",
										handler: () => {
											this.translate.setDefaultLang("en");
											this.storage.setItem("lang", "en");
										}
									},
									{
										/////////////////////////
										text: "ਪੰਜਾਬੀ", // Change to Punjab here
										handler: () => {
											this.translate.setDefaultLang("punjab");
											this.storage.setItem("lang", "punjab");
										}
									}
								]
							})
							.present();
					}
				}
			);

			// localStorage.setItem("mailChimpLocal", "true");
		});
	}

	presentProfileModal() {
		// const profileModal = this.modalCtrl.create("IntroPage");
		// profileModal.present();
	}

	openPage(page) {
		// close the menu when clicking a link from the menu
		// navigate to the new page if it is not the current page
		// if (page.singlePage) {
		// 	this.menu.open();
		// 	this.nav.push(this.getPageForOpen(page.component), {
		// 		service: this.getServiceForPage(page.component),
		// 		page: page.component
		// 	});
		// } else {
		// }
		this.nav.setRoot(page.component, {
			componentName: page.component
		});
	}

	getPageForOpen(value: string): any {
		return null;
	}

	getServiceForPage(value: string): IService {
		return null;
	}
}
