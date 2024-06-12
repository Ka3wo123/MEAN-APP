import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { BlogItemTextComponent } from '../blog-item-text/blog-item-text.component';
import { CommonModule } from '@angular/common';
import {tap, catchError } from 'rxjs'
import { NOT_FOUND } from '../../error';

@Component({
  selector: 'app-blog-item-details',
  standalone: true,
  imports: [BlogItemTextComponent, CommonModule],
  templateUrl: './blog-item-details.component.html',
  styleUrl: './blog-item-details.component.css'
})
export class BlogItemDetailsComponent implements OnInit {
  public id: string = '';
  public image: string = '';
  public text: string = '';
  public title: string = '';  
  public error: string = '';

  constructor(private service: DataService, private route: ActivatedRoute) {

  }

   ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '';
      if (this.id) {
        this.getPost();
      }
    });
  }

  getPost() {    
    return this.service.getOne(this.id).pipe(
      tap((result) => {
        this.image = result.image;
        this.text = result.text;
        this.title = result.title;
      }),
      catchError((error) => {
        this.error = NOT_FOUND.message;
        throw error;
      })
    ).subscribe();
  }
  
}
