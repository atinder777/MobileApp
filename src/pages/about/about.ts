import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-about",
	templateUrl: "about.html"
})
export class AboutPage {
	params: any = {};

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() {
		this.params.data =
			"<p>Lorem ipsum dolor sit amet, vim ne dicant perpetua, vis et probo paulo graeco. Vix ei etiam primis, an eos impetus fabulas scaevola, ne vim omittantur repudiandae. Nam no veritus antiopam, his dolor aeterno suscipiantur ut. Vix id sanctus repudiare.</p>\n<p>Facilisi consulatu definitiones eum an. Erat rebum sed eu. Ne placerat moderatius argumentum eum, his quidam recteque ei. Sint pericula id pri, eum ad unum illum comprehensam. Lorem detracto copiosae vim at, omittam pericula ex quo. Ne legere necessitatibus sed. Vel id quis ferri animal, quem errem consul ei qui.</p>\n<p>Ne pri essent accusam appellantur, idque minim dolores eos ea, ex vis lucilius iracundia interpretaris. Viris gloriatur eam ei. Everti invidunt vivendum usu at, lorem vivendo scribentur mei in. An amet invenire est, graece invenire scribentur no qui. Quas complectitur ex has, augue simul torquatos vim eu, eum et oratio facilisis. Pri consul nusquam consequat ut, nec an saepe decore graeci. Bonorum noluisse per te.</p>\n<p>Vix harum virtute ornatus in. Nec te dicit recusabo, eu dolores eligendi efficiendi sed, mel no causae eligendi menandri. Sit et docendi partiendo, cu usu scaevola mediocrem. Ea sea vidit neglegentur, no mucius fierent sed, eu cum dicam omittantur. Appareat recusabo prodesset usu et, quot liberavisse his ei.</p>\n<p>Cum an tacimates necessitatibus. Ut pro quod cetero partiendo, mel ex liber oratio, pertinax definiebas ea sea. In tale porro similique nec, postea accusam mea eu. In quem repudiare qui, at vim elit aliquando assentior. Quo ad semper dicunt offendit, praesent temporibus ut has. Duis doming dissentias id est, ad minimum laboramus gloriatur eos. Sale democritum sed id, te suas epicurei eum, no vitae dolorem pro.</p>\n<p>Eros vidit definitionem vis ut, per illud everti reprimique ne, pro impedit vocibus detracto ne. Et lorem deseruisse assueverit vim, exerci scaevola nam at, sed elaboraret scriptorem in. Primis nusquam scripserit cum ex, no audiam quaestio mel. Ea mea wisi noster scriptorem, in scripta assentior sea. Sale indoctum maiestatis at mea.</p>\n<p>In vide dolorem repudiare usu. Cum at phaedrum quaerendum, saepe epicurei ei qui. Ea sea adipisci appellantur. Id ludus graeci ornatus mei. Ea prima zril nec, est fierent nominati et, pri ne dolor nonumes. Te vel option bonorum scribentur, vis iudico nostrum gloriatur et, qui id melius diceret.</p>\n<p>Pro ex vidit accusamus concludaturque, ex quo dico partiendo. Nominavi accusamus necessitatibus nam ex, qui ex maiestatis democritum, eu vide lorem iracundia quo. Ne graeco efficiendi consequuntur nec, eu per facilisi patrioque. Eu usu modo tincidunt. Vix eros graece aperiri ad. Duo ne delectus abhorreant, mea saperet corpora constituto ut. Tibique eligendi mei at, nullam signiferumque eos ad.</p>\n<p>Ius saepe dolorem eu, est iuvaret suscipit no, eam scripta repudiare democritum id. Facilisis gubergren et sed, id liber verear civibus cum, no accusamus quaerendum complectitur duo. Eu eloquentiam repudiandae necessitatibus vix, ei vix partem luptatum, ex ullum nonumy fuisset qui. Erat feugait fuisset eu mei. Mea ea vide mandamus delicatissimi.</p>\n<p>Ius et dico intellegat, quo no quod utinam vivendo. Vis labore labores ad, mei posse conceptam no. Autem gubergren liberavisse cum id, ad mazim decore pri, eos ut liber numquam oporteat. Quem officiis vix in, doming perfecto efficiantur ut pro. Lucilius evertitur adipiscing sed an, ut ocurreret adipiscing pro.</p>\n";
		console.log("ionViewDidLoad AboutPage");
	}
}
