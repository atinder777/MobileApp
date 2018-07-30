import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { MyApp } from "./app.component";
import { ToastService } from "../services/toast-service";
import { LoadingService } from "../services/loading-service";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { GoogleAnalytics } from "@ionic-native/google-analytics";
import { PostProvider } from "../providers/post/post";
import { CallNumber } from "@ionic-native/call-number";
import { EmailComposer } from "@ionic-native/email-composer";
import { NativeStorage } from "@ionic-native/native-storage";
import { OneSignal } from "@ionic-native/onesignal";

// import ngx-translate and the http loader
import { TranslateModule, TranslateLoader, TranslatePipe } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { PushProvider } from "../providers/push/push";
import { Camera } from "@ionic-native/camera";

@NgModule({
	declarations: [MyApp],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
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
		Camera,
		OneSignal,
		NativeStorage,
		EmailComposer,
		CallNumber,
		BarcodeScanner,
		StatusBar,
		SplashScreen,
		ToastService,
		LoadingService,
		GoogleAnalytics,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		PostProvider,
		PushProvider
	]
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
