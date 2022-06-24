import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit, OnDestroy {
  step = 1;
  cadastroForm = new FormGroup({
    email: new FormControl(null, [
      Validators.required
    ]),
    email2: new FormControl(null, [
      Validators.required
    ]),
    name: new FormControl(null, [
      Validators.required
    ]),
    date: new FormControl(null, [
      Validators.required
    ]),
    password: new FormControl(null, [
      Validators.required
    ]),
    password2: new FormControl(null, [
      Validators.required
    ]),
  });

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  enviarDados(): void{
    if (this.step === 1){
      const email = this.cadastroForm.get('email').value;
      const emailConfirmation = this.cadastroForm.get('email2').value;
      if ( email === emailConfirmation){
        this.step = 2;
      }else{
            // error
      }
    } else {
      const name = this.cadastroForm.get('name').value;
      const date = this.cadastroForm.get('date').value;
      const password = this.cadastroForm.get('password').value;
      const passwordConfirmation = this.cadastroForm.get('password2').value;
      if (password === passwordConfirmation){
        const data = {
          name,
          password,
          email: this.cadastroForm.get('email').value,
          date
        };
        const a = this.authService.register(data).subscribe(res => {
          console.log(res);
        });
        this.subscriptions.push(a);
      }else{
        // error
      }
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
