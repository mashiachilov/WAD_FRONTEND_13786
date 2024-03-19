import { Component, inject } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  router = inject(Router);
  location = inject(Location)
  disabled: boolean = false;


  redirect(route: string) {
    this.router.navigateByUrl(route)
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.disabled = !(event.url === '/recept' || event.url === '/visitor')
      }
    });
  }

  create() {
    this.router.navigateByUrl(this.location.path() + '-create')
  }
}
