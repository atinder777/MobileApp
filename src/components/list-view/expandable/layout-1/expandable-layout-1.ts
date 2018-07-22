import { Component, Input, ViewChild } from "@angular/core";
import { IonicPage, Content, NavController } from "ionic-angular";

@IonicPage()
@Component({
	selector: "expandable-layout-1",
	templateUrl: "expandable.html"
})
export class ExpandableLayout1 {
	@Input() data: any;
	@Input() events: any;
	@ViewChild(Content) content: Content;

	constructor(public navCtrl: NavController) {}

	onEvent(event: string, item: any, e: any) {
		if (this.events[event]) {
			this.events[event](item);
		}
		this.navCtrl.push("PostPage", {
			post: item
		});
	}

	toggleGroup(group: any) {
		group.show = !group.show;
	}

	isGroupShown(group: any) {
		return group.show;
	}
}
