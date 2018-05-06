import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

// everthing we create weater service,component
@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  // import modules over here
  imports: [
    BrowserModule
  ],
  // services go over here
  providers: [],
  // what componenets to be bootstrapped
  bootstrap: [AppComponent]
})
export class AppModule { }
