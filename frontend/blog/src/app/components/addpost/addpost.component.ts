import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Post } from '../../post';
import { CommonModule } from '@angular/common';
import { catchError, tap } from 'rxjs';
import { error } from 'console';
import { BAD_REQUEST } from '../../error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [DataService],
  templateUrl: './addpost.component.html',
  styleUrl: './addpost.component.css'
})
export class AddpostComponent implements OnInit {
  public post: Post = {
    title: '',
    text: '',
    image: ''
  }
  public error: string = '';
  ngOnInit(): void {

  }

  constructor(public dataService: DataService, private router: Router) {

  }

  addPost() {    
    return this.dataService.addPost(this.post).pipe(
      tap((result) => {
        console.log("post " + result);
        this.router.navigate(['/blog'])
      }
      ),
      catchError((error) => {
        this.error = BAD_REQUEST.message;
        throw error;
      })
    ).subscribe()
  }

}
