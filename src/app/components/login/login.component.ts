import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required
    ])
  });

  subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  onSubmit() {
    const username = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    try {
      const obs = this.authService.login(username, password).subscribe(res => {
        if (!!res && res.status == true) {
          this.router.navigate(['feed']);
        }
      });
      this.subscriptions.push(obs);
    } catch (error) {
      console.error('erro', error);
      throw error;
    } finally {
      // just for testing
      // this.router.navigate(['feed']);
    }
  }

}
