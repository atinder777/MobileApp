import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { MyApp } from "./app.component";

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppSettings } from "../services/app-settings";
import { ToastService } from "../services/toast-service";
import { LoadingService } from "../services/loading-service";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { GoogleAnalytics } from "@ionic-native/google-analytics";
import { PostProvider } from "../providers/post/post";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";

// import ngx-translate and the http loader
import { TranslateModule, TranslateLoader, TranslatePipe } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [MyApp],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(AppSettings.FIREBASE_CONFIG),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		AngularFirestoreModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [MyApp],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [
		EmailComposer,
		CallNumber,
		BarcodeScanner,
		StatusBar,
		SplashScreen,
		ToastService,
		LoadingService,
		GoogleAnalytics,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		PostProvider
	]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}
