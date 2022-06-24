import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-manage-user-pool',
  templateUrl: './manage-user-pool.component.html',
  styleUrls: ['./manage-user-pool.component.scss']
})
export class ManageUserPoolComponent implements OnInit, OnDestroy {

  userPool: User[];
  loading = false;
  subscription: Subscription[] = [];

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getUserPool();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  getUserPool(): void {
    try {
      this.loading = true;
      const sub = this.authService.getUserPool().subscribe(data => {
        this.userPool = data.user;
        this.loading = false;
      });
      this.subscription.push(sub);
    } catch (error) {
      console.error('ERROR on getUserPool', error);
      throw error;
    }
  }

  onChangeRole(user: User): void {
    try {
      this.loading = true;
      const sub = this.authService.updateUser(user).subscribe(data => {
        this.loading = false;
      });
      this.subscription.push(sub);
    } catch (error) {
      console.error('ERROR on getUserPool', error);
      throw error;
    }
  }
  sendDecision(user: User, decision: string): void {
    user.status = decision;
    try {
      this.loading = true;
      const sub = this.authService.updateUser(user).subscribe(data => {
        this.loading = false;
      });
      this.subscription.push(sub);
    } catch (error) {
      console.error('ERROR on getUserPool', error);
      throw error;
    }
  }

}
