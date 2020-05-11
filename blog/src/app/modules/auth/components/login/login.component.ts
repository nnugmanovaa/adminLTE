import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../core/services/auth.service';
import {LoginRequest} from '../../../../core/models/requests/login-request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  invalidLoginPassword = false;

  constructor(private authService: AuthService,
              private router: Router,
              private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const loginRequest = this.loginForm.getRawValue() as LoginRequest;
    this.loading = true;
    this.authService.login(loginRequest).subscribe((perf) => {
      this.invalidLoginPassword = false;
      this.loading = false;
      this.authService.authorize(perf.token);
      this.router.navigateByUrl('/');
    }, (err) => {
      this.invalidLoginPassword = true;
      this.loading = false;
    });
  }

}
