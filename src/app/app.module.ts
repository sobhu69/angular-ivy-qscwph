import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AccountComponent} from './account/account.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule  ],
  declarations: [ AppComponent, HelloComponent, AccountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
  constructor() {
  }
}
