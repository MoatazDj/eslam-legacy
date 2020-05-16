import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadioComponent } from './radio/radio.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path : 'radio', component: RadioComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'profile',component: ProfileComponent},
  {path:'favorites',component: FavoritesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
