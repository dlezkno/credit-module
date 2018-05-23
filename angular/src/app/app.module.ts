import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreditComponent } from './components/credit/credit.component';
import { ClientComponent } from './components/client/client.component';
import { RequestCreditComponent } from './components/request-credit/request-credit.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { CreditService } from './services/credit.service';


@NgModule({
  declarations: [
    AppComponent,
    CreditComponent,
    ClientComponent,
    RequestCreditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ClientService,CreditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
