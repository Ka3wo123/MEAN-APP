import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BAD_REQUEST } from '../../error'
import { tap, catchError } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  providers: [AuthService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  public credentials = {
    name: '',
    email: '',
    password: ''
  }  

  public error: string = '';


  constructor(private authService: AuthService, public router: Router) {

  }

  ngOnInit(): void {
    
  }

  createUser() { 
    this.error = '';   
    return this.authService.authenticate(this.credentials).pipe(
      tap((result) => {
          this.router.navigate(['/']);
      }),
      catchError((error) => {
        this.error = BAD_REQUEST.message;
        throw error;
      })
    ).subscribe();
  }

}
