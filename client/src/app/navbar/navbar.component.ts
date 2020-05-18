import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token = this.authService.getToken();

  constructor(private authService: AuthService) { }

  /**
   * @function {logout}-will log the user out of the application 
   * @param {void}
   * @returns {void}
   */

  logout() {
    this.authService.reset()
    this.token = undefined
    console.log(localStorage)
  }

  ngOnInit(): void {
  }



}
