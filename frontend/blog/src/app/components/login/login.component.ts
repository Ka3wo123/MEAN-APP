import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { tap, catchError } from 'rxjs'
import { BAD_REQUEST } from '../../error';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public credentials = {
    name: '',
    password: ''
  };

  public logged?: boolean;
  public logout?: boolean;
  public error: string = '';

  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {

  }

  

  signIn() {
    this.error = '';
    return this.authService.authenticate(this.credentials).pipe(
      tap((result) => {
        if (!result) {
          this.logged = false;
        } else {
          this.logout = false;
          this.credentials = {
            name: '',
            password: ''
          };

          this.router.navigate(['/']);
        }
      }),
      catchError((error) => {
        this.error = BAD_REQUEST.message;
        throw error;
      })
    ).subscribe();
  }

}
