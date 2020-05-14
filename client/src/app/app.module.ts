import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
=======
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> aac0b656d0834007870bb41603bc7116c4f95850

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    FooterComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
>>>>>>> aac0b656d0834007870bb41603bc7116c4f95850
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
