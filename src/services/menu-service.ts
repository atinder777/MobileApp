import { IService } from "./IService";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppSettings } from "./app-settings";
import { LoadingService } from "./loading-service";

@Injectable()
export class MenuService {
	constructor(private loadingService: LoadingService) {}

	getId = (): string => "menu";

	getTitle = (): string => "Agristudy";

	getAllThemes = (): Array<any> => {
		return [
			{
				title: "Home",
				icon: "icon-home",
				component: "HomePage"
			},
			{
				title: "Faculty",
				icon: "icon-library",
				component: "FacultyPage"
			},
			// {
			// 	title: "Contact",
			// 	icon: "icon-phone-in-talk",
			// 	component: "ContactPage"
			// },
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
			background: "assets/images/background/14.jpg",
			image: "assets/images/logo/1.png",
			title: "Ionic 3 theme iOS 11 style",
			description: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt"
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
