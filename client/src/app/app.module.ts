import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule, IslamicService } from '@syncfusion/ej2-angular-calendars';
import { VersesComponent } from './verses/verses.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { StatesComponent } from './states/states.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { RadioComponent } from './radio/radio.component';
import { PartnerComponent } from './partner/partner.component';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrayerTimeComponent } from './prayer-time/prayer-time.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutUsComponent,
    FooterComponent,
    CalendarComponent,
    VersesComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    StatesComponent,
    FavoritesComponent,
    RadioComponent,
    PartnerComponent,
    PrayerTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule
  ],
  providers: [IslamicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
