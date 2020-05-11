import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../../../../core/validators/must-match';
import {RegisterUserRequest} from '../../../../core/models/requests/register-user-request';
import {UserService} from '../../../../core/services/user-service';
import {debounceTime, distinctUntilChanged, filter, flatMap, switchMap, throttleTime} from 'rxjs/operators';
import {AuthService} from '../../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public exists = false;
  public registerForm: FormGroup;
  error: string;

  constructor(private builder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.registerForm = this.builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    this.checkUsername();
  }

  register() {
    const user = this.registerForm.getRawValue() as RegisterUserRequest;
    this.authService.register(user).subscribe(perf => {
      this.router.navigateByUrl('/auth');
    }, err => {
      alert('Sorry there is error occured');
    });
  }

  checkUsername() {
    this.registerForm.get('username').valueChanges
      .pipe(
        filter((e) => {
          if (!!e && !e.includes('/')) {
            this.error = null;
            return true;
          } else {
            this.error = 'Неправильное значение';
            return false;
          }
        }),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((perf) => {
          return this.userService.checkUsername(perf as string);
        })
      ).subscribe(perf => {
      this.exists = perf.exists;
    }, err => {
      this.checkUsername();
    });
  }
}
