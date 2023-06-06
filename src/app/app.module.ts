import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LOCALE_ID, isDevMode } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBR from '@angular/common/locales/pt';
import { FatForadoprazoComponent } from './fat-foradoprazo/fat-foradoprazo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
registerLocaleData(ptBR);


@NgModule({
  declarations: [
    AppComponent,
    FatForadoprazoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [   {provide: LOCALE_ID,      useValue: 'pt'    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
