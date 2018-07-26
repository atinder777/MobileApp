import { IService } from "./IService";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "./app-settings";
import { LoadingService } from "./loading-service";
import { NativeStorage } from "../../node_modules/@ionic-native/native-storage";

@Injectable()
export class MenuService {
	constructor(private loadingService: LoadingService, private storage: NativeStorage) {}

	getId = (): string => "menu";

	getTitle = (): string => "KVK Pathankot";

	getAllThemes = (): Array<any> => {
		return [
			{
				title: "Home",
				icon: "icon-home",
				component: "HomePage"
			},
			{
				title: "Staff",
				icon: "icon-library",
				component: "FacultyPage"
			},
			{
				title: "Contact",
				icon: "icon-phone-in-talk",
				component: "ContactPage"
			},
			{
				title: "Settings",
				icon: "icon-settings",
				component: "SettingsPage"
			},
			{
				title: "About",
				icon: "icon-information-outline",
				component: "AboutPage"
			}
		];
	};

	getDataForTheme = () => {
		return {
			background: "assets/images/training_for_farmers.jpg",
			image: "assets/images/app_icon.png",
			title: "KVK Pathankot",
			description: "Punjab Agricultural University"
		};
	};

	getEventsForTheme = (menuItem: any): any => {
		return {};
	};

	prepareParams = (item: any) => {
		return {
			title: item.title,
			data: {},
			events: this.getEventsForTheme(item)
		};
	};

	load(item: any): Observable<any> {
		var that = this;
		that.loadingService.show();

		return new Observable(observer => {
			that.loadingService.hide();
			observer.next(this.getDataForTheme());
			observer.complete();
		});
	}
}
