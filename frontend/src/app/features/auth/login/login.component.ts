import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isLoginMode: boolean = true;
  public password: string = '';
  public address: string = '';
  public name: string = '';
  public email: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.authService.login(this.email, this.password).subscribe({
        next: (res) => {
          console.log('Login successful', res);
          this.router.navigate(['/products']);
        },
        error: (err) => {
          console.error('Login error', err);
        }
      });
    } else {
      this.authService.signup(this.name, this.email, this.password, this.address).subscribe({
        next: (res) => {
          console.log('Signup successful', res);
          this.isLoginMode = true;
        },
        error: (err) => {
          console.error('Signup error', err);
        }
      });
    }
  }
}
