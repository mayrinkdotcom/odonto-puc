import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(
    private authService: AuthService, private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedUser();
  }
  goTo(category: string): void{
    this.router.navigate(['post/categoria'], { queryParams: { category } });
  }

}
