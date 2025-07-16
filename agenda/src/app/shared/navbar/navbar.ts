import { Component } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule],
  templateUrl: './navbar.html',
  standalone: true,
})
export class Navbar {
  faBook = faBook
}
